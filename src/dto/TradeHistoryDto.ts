export class PnL {
    amount: string;
    percentage: string;
    isProfit: boolean;

    constructor(data: Partial<PnL>) {
        this.amount = data.amount || '';
        this.percentage = data.percentage || '';
        this.isProfit = data.isProfit || false;
    }
}

export class TradeHistory {
    _id: string;
    userId: string;
    country: string;
    countryCode: string;
    time: string;
    entryPrice: number;
    marketPrice: number;
    pnl: PnL;
    status: string;
    createdAt: string;
    updatedAt: string;
    __v: number;

    constructor(data: Partial<TradeHistory>) {
        this._id = data._id || '';
        this.userId = data.userId || '';
        this.country = data.country || '';
        this.countryCode = data.countryCode || '';
        this.time = data.time || '';
        this.entryPrice = data.entryPrice || 0;
        this.marketPrice = data.marketPrice || 0;
        this.pnl = new PnL(data.pnl || {});
        this.status = data.status || '';
        this.createdAt = data.createdAt || '';
        this.updatedAt = data.updatedAt || '';
        this.__v = data.__v || 0;
    }
}

export class TradeHistoryResponse {
    message: string;
    data: TradeHistory[];
    status: boolean;

    constructor(data: Partial<TradeHistoryResponse>) {
        this.message = data.message || '';
        this.data = (data.data || []).map(item => new TradeHistory(item));
        this.status = data.status || false;
    }
} 