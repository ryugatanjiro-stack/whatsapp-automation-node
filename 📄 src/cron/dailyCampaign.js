import cron from "node-cron";
import { sendBroadcast } from "../services/marketingService.js";

cron.schedule("0 10 * * *", async () => {
  console.log("Running 10 AM daily promo...");
  await sendBroadcast("daily_promo", ["🔥 Exclusive Daily Deal Just For You!"]);
});
