const mongoose = require("mongoose");

const positionEventSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    entryPrice: { type: Number, required: true },
    positionId: { type: String, required: true },
    countryId: { type: String, required: true },
    direction: { type: String, required: true },
    size: { type: Number, required: true },
    leverage: { type: Number, required: true },
    realizedPnl: { type: Number, required: true },
    liquidationPrice: { type: Number, required: true },
    createdAt: { type: Number },
    closedAt: { type: Number },
    status: { type: String, default: 'OPEN' }
});

module.exports = mongoose.model("PositionEvent", positionEventSchema);
