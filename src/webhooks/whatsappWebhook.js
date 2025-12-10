import express from "express";
import config from "../config/config.js";

const router = express.Router();

// VERIFY WEBHOOK
router.get("/", (req, res) => {
  if (req.query["hub.verify_token"] === config.verifyToken) {
    return res.send(req.query["hub.challenge"]);
  }
  res.sendStatus(403);
});

// RECEIVE EVENTS
router.post("/", (req, res) => {
  console.log("Incoming Webhook:", JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

export default router;
