const WebSocket = require('ws');
const logger = require('../../bin/helper/logger');
const { createPublicClient, webSocket, parseAbiItem } = require('viem');
const config = require('../../bin/config/blockchain');


let wss;
let clients = new Set();

const client = createPublicClient({
    chain: config.CHAIN,
    transport: webSocket(config.WS_URL)
});

// Transfer event ABI
const transferEventAbi = parseAbiItem("event Transfer(address sender, address wallet, uint256 amount)");

/**
 * Helper function to handle BigInt serialization
 * @param {Object} log - The event log to serialize
 * @returns {Object} Serialized log with BigInt values converted to strings
 */
function serializeLog(log) {
    return {
        ...log,
        args: {
            ...log.args,
            amount: log.args.amount.toString()
        },
        blockNumber: log.blockNumber.toString(),
        transactionIndex: log.transactionIndex.toString(),
        logIndex: log.logIndex.toString()
    };
}

/**
 * Process a transfer event and save it to the database
 * @param {Object} log - The event log to process
 * @returns {Promise<Object>} The saved transfer event
 */
async function processTransferEvent(log) {
    const ctx = 'blockchain-service processTransferEvent';
    try {
        const trxData = {
            sender: log.args.sender,
            wallet: log.args.wallet,
            amount: log.args.amount.toString(),
            blockNumber: log.blockNumber.toString(),
            blockHash: log.blockHash,
            trxHash: log.transactionHash,
            timestamp: new Date()
        };

        logger.log(ctx, `Processing transfer data: ${JSON.stringify(trxData)}`, 'event-processed');


        logger.log(ctx, `Transfer event saved: ${trxData}`, 'event-saved');

        return trxData;
    } catch (error) {
        logger.log(ctx, `Error processing transfer event: ${error}`, 'error');
        throw error;
    }
}

/**
 * Send a message to a specific WebSocket client
 * @param {WebSocket} ws - The WebSocket client
 * @param {string} type - The message type
 * @param {Object} data - The message data
 */
function sendMessage(ws, type, data) {
    if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ type, data }));
    }
}

/**
 * Broadcast a message to all connected clients
 * @param {string} type - The message type
 * @param {Object} data - The message data
 */
function broadcastMessage(type, data) {
    const ctx = 'blockchain-service broadcastMessage';
    try {
        clients.forEach(client => sendMessage(client, type, data));
        logger.log(ctx, `Message broadcasted to ${clients.size} clients`, 'broadcast');
    } catch (error) {
        logger.log(ctx, `Error broadcasting message: ${error}`, 'error');
    }
}

/**
 * Initialize the WebSocket server and blockchain event listener
 * @param {Object} server - The HTTP server instance
 */
function initialize(server) {
    const ctx = 'blockchain-service initialize';
    try {
        // Initialize WebSocket server
        wss = new WebSocket.Server({ server });
        logger.log(ctx, 'WebSocket server initialized', 'init');

        // Handle WebSocket connections
        wss.on('connection', handleWebSocketConnection);

        // Start blockchain event listener
        startBlockchainListener();

        // Start auto update
        startAutoUpdate();
    } catch (error) {
        logger.log(ctx, `Error initializing blockchain service: ${error}`, 'error');
        throw error;
    }
}

/**
 * Handle new WebSocket connections
 * @param {WebSocket} ws - The new WebSocket connection
 */
function handleWebSocketConnection(ws) {
    const ctx = 'blockchain-service handleWebSocketConnection';
    logger.log(ctx, 'New WebSocket client connected', 'connection');

    clients.add(ws);

    // Send initial data
    // sendLatestEvents(ws);

    ws.on('error', (error) => {
        logger.log(ctx, `WebSocket error: ${error}`, 'error');
    });

    ws.on('close', () => {
        logger.log(ctx, 'Client disconnected', 'connection');
        clients.delete(ws);
    });
}

/**
 * Start listening for blockchain events
 */
async function startBlockchainListener() {
    const ctx = 'blockchain-service startBlockchainListener';
    try {
        client.watchEvent({
            address: config.CONTRACT_ADDRESS,
            event: transferEventAbi,
            onLogs: async (logs) => {
                logger.log(ctx, `Received events: ${JSON.stringify(logs.map(serializeLog))}`, 'event-received');

                for (const log of logs) {
                    try {
                        const transferEvent = await processTransferEvent(log);
                        broadcastMessage(config.EVENT_TYPES.TRANSFER, transferEvent);
                    } catch (error) {
                        logger.log(ctx, `Error handling transfer event: ${error}`, 'error');
                    }
                }
            }
        });

        logger.log(ctx, 'Blockchain event listener started', 'init');
    } catch (error) {
        logger.log(ctx, `Error starting blockchain listener: ${error}`, 'error');
        throw error;
    }
}

function startAutoUpdate() {
    const ctx = 'blockchain-service startAutoUpdate';

    logger.log(ctx, 'Auto update service started', 'init');
}

module.exports = {
    initialize,
    broadcastMessage,
    startAutoUpdate
}; 