const mongoose = require("mongoose");

// each item in the user's order
const orderItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  size: { type: String },
  price: { type: Number, required: true },
  img: { type: String },
  Order_date: { type: String }, // used in frontend to show order date
});

// full order for one user
const orderSchema = new mongoose.Schema({
  email: { type: String, required: true }, // user email
  order_data: { type: Array, required: true }, // same structure your frontend sends
  amount: { type: Number, default: 0 }, // total price
  status: {
    type: String,
    enum: ["Pending", "Preparing", "Out for Delivery", "Delivered", "Cancelled"],
    default: "Pending",
  },
  date: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
