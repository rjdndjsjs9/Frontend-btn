const { baseSepolia } = require('viem/chains');

module.exports = {
    CHAIN: baseSepolia,
    WS_URL: "wss://base-sepolia.infura.io/ws/v3/734b064e490945d7bf4b02e536413330",
    CONTRACT_ADDRESS: '0x3eD8D646eC3fBD216352FEeFD162E5059AddBA4F',
    EVENT_TYPES: {
        TRANSFER: 'TRANSFER_EVENT',
        INITIAL: 'INITIAL_EVENTS',
        UPDATE: 'EVENTS_UPDATE'
    }
}; 