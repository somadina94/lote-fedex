const express = require("express");
const shipmentController = require("../controllers/shipmentController");

const router = express.Router();

router
  .route("/")
  .post(shipmentController.createShipment)
  .get(shipmentController.getAllShipments);

router.get("/get-shipment/:id", shipmentController.getOneShipment);

router.patch("/update-shipment", shipmentController.updateShipment);

router.patch("/deliver-shipment", shipmentController.deliverShipment);

router.delete("/delete-shipment", shipmentController.deleteShipment);

module.exports = router;
