import express from "express";
import mongoose from "mongoose";
import config from "./config/config.js";
import whatsappWebhook from "./webhooks/whatsappWebhook.js";
import "./cron/dailyCampaign.js";

const app = express();
app.use(express.json());

mongoose.connect(config.mongoUri)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

app.use("/webhook", whatsappWebhook);

app.listen(config.server.port, () =>
  console.log(`Server running on port ${config.server.port}`)
);
