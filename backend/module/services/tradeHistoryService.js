
const logger = require('../../bin/helper/logger');
const positionEvent = require('../models/PositionEvent');
const ctx = 'trade-history-service';
const mongoose = require('mongoose');

async function getTradeHistoryById(userAddress) {
  try {
    if (!userAddress) {
      logger.log(ctx, `Trade history data userAddress is required`, 'find trade history');
      throw new Error("User Address is required.");
    }

    const tradeHistory = await positionEvent.find({ address: userAddress });

    if (!tradeHistory || tradeHistory.length === 0) {
      logger.log(ctx, `No trade history found for userAddress ${userAddress}`, 'find trade history');
      throw new Error("Trade history not found.");
    }

    logger.log(ctx, `Trade history fetched for userAddress ${userAddress}`, 'find trade history');
    return tradeHistory;
  } catch (error) {
    logger.log(ctx, error.message, 'getTradeHistoryById');
    throw error;
  }
}

module.exports = {
  getTradeHistoryById
};