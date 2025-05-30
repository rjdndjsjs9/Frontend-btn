const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./bin/routes/authRoutes");
const countryRoutes = require("./bin/routes/countryRoutes");
const global_config = require("./bin/helper/global_config");
const logger = require('./bin/helper/logger');
const websocketService = require('./module/services/websocketService');
const blockchainService = require('./module/services/blockchainService');

dotenv.config();
const app = express();
const port = global_config.get("/port");
const mongoUri = global_config.get("/mongo");

app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", countryRoutes);
const ctx = 'app-listen';

mongoose.connect(mongoUri)
  .then(() => {
    logger.log(ctx, "Connected to MongoDB", 'initate db');

    const server = app.listen(process.env.PORT, () => {
      logger.log(ctx, `Server running on port ${port}`, 'initate application');
    });

    websocketService.initialize(server);
    websocketService.startAutoUpdate();

    blockchainService.initialize(server);
    blockchainService.startAutoUpdate();
  })
  .catch((err) => {
    logger.log(ctx, `MongoDB connection error: ${err}`, 'database error');
  });