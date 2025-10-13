const express = require("express");
const router = express.Router();
const Order = require("../models/adminorder");

// 🟢 Get all orders for admin
router.get("/admin/orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({ date: -1 });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// 🟠 Update order status
router.post("/admin/updateStatus", async (req, res) => {
  const { orderId, status } = req.body;
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    if (!updatedOrder)
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });

    res.json({ success: true, message: "Status updated", data: updatedOrder });
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
