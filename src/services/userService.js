import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  phone: String,
  name: String,
  opt_in_marketing: Boolean,
  tags: [String],
  lastPurchaseDate: Date,
  abandonedCart: Boolean
});

export const User = mongoose.model("User", userSchema);

export const getMarketingUsers = () =>
  User.find({ opt_in_marketing: true });
