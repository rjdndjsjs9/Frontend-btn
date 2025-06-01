const tradeHistoryService = require("../services/tradeHistoryService");

async function getByUserId(req, res) {
  try {
    const userAddress = req.params.userAddress;
    const data = await tradeHistoryService.getTradeHistoryById(userAddress);
    res.status(200).json({ message: "success", data: data, status: true });
  } catch (err) {
    res.status(500).json({ message: "error " + err.message, data: [], status: false });
  }
}



module.exports = {
  getByUserId
};