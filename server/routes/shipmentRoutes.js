const express = require("express");
const shipmentController = require("../controllers/shipmentController");

const router = express.Router();

router
  .route("/")
  .post(shipmentController.createShipment)
  .get(shipmentController.getAllShipments);

router.get("/get-shipment/:id", shipmentController.getOneShipment);

router.patch(
  "/update-shipment-location/:id",
  shipmentController.updateShipmentLoc
);

router.patch("/update-shipment/:id", shipmentController.updateShipment);

router.patch("/deliver-shipment", shipmentController.deliverShipment);

router.delete("/delete-shipment/:id", shipmentController.deleteShipment);

router.delete("/delete-location", shipmentController.deleteLocation);

module.exports = router;
