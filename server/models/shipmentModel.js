const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema({
  name: String,
  receipient: String,
  trackingId: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  locations: [{ title: String, address: String, date: Date, quote: String }],
  delivered: {
    type: Boolean,
    default: false,
  },
  destination: String,
  deliveryDate: Date,
});

const Shipment = mongoose.model("Shipment", shipmentSchema);

module.exports = Shipment;
