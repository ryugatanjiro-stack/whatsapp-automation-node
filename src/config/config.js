import "dotenv/config";

export default {
  phoneId: process.env.PHONE_NUMBER_ID,
  token: process.env.WHATSAPP_TOKEN,
  wabaId: process.env.WABA_ID,
  mongoUri: process.env.MONGO_URI,
  verifyToken: process.env.VERIFY_TOKEN,
  server: {
    port: process.env.PORT || 3000
  }
};
