const Shipment = require("../models/shipmentModel");

exports.createShipment = async (req, res) => {
  console.log(req.body.createdAt);
  try {
    const shipment = await Shipment.create({
      name: req.body.name,
      trackingId: req.body.trackingId,
      destination: req.body.destination,
      createdAt: new Date(req.body.createdAt),
      deliveryDate: new Date(req.body.deliveryDate),
      receipient: req.body.receipient,
      facility: req.body.facility,
      sender: req.body.sender,
      senderAddress: req.body.senderAddress,
    });

    if (!shipment) {
      return res.status(403).json({
        status: "fail",
        message: `You may have created a shipment with that tracking Id, please change tracking Id`,
      });
    }

    res.status(201).json({
      status: "success",
      message: `Shipment created successfully`,
      data: {
        shipment,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      error: err,
      message: `Error creating shipment, make sure the Id has not been used and the whole form is filled correctly`,
    });
  }
};

exports.updateShipment = async (req, res) => {
  try {
    const shipment = await Shipment.findOne({ trackingId: req.params.id });

    if (!shipment) {
      return res.status(404).json({
        status: "fail",
        message: `Shipment not found`,
      });
    }

    const updatedShipment = await Shipment.findByIdAndUpdate(
      { _id: shipment._id },
      req.body,
      { new: true }
    );

    res.status(200).json({
      status: "success",
      message: `Shipment with id ${updatedShipment.trackingId} has been updated successfully!`,
      data: {
        shipment: updatedShipment,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      error: err,
      message: `Could not update Shipment`,
    });
  }
};

exports.updateShipmentLoc = async (req, res) => {
  try {
    const shipment = await Shipment.findOne({
      trackingId: req.params.id,
    });
    if (!shipment) {
      return res.status(404).json({
        status: "fail",
        message: `No shipment found with that Id`,
      });
    }

    const data = {
      address: req.body.address,
      date: new Date(req.body.date),
      title: req.body.title,
      quote: req.body.quote,
    };

    shipment.locations.push(data);
    await shipment.save({ validateBeforeSave: false });

    res.status(200).json({
      status: "success",
      message: `Shipment ${shipment.trackingId} updated successfully`,
      data: {
        shipment,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      error: err,
    });
  }
};

exports.deleteShipment = async (req, res) => {
  try {
    const shipment = await Shipment.findOne({ _id: req.params.id });

    if (!shipment) {
      return res.status(404).json({
        status: "fail",
        message: "No shipment found with that tracking Id",
      });
    }

    await Shipment.findByIdAndDelete({ _id: shipment._id });

    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      error: err,
    });
  }
};

exports.getOneShipment = async (req, res) => {
  try {
    const shipment = await Shipment.findOne({
      trackingId: req.params.id,
    });
    if (!shipment) {
      return res.status(404).json({
        status: "fail",
        message: "Invalid tracking Id, shipment not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        shipment,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      error: err,
    });
  }
};

exports.getAllShipments = async (req, res) => {
  const shipments = await Shipment.find();
  if (shipments.length === 0) {
    return res.status(404).json({
      status: "fail",
      message: `You currently have no shipments.`,
    });
  }

  res.status(200).json({
    status: "sucess",
    data: {
      shipments,
    },
  });
};

exports.deliverShipment = async (req, res) => {
  try {
    const shipment = await Shipment.findOne({
      trackingId: req.body.trackingId,
    });

    const deliveredShipment = await Shipment.findByIdAndUpdate(
      { _id: shipment._id },
      { delivered: true },
      { new: true }
    );

    res.status(200).json({
      status: "success",
      message: `Shipment delivered successfully`,
      data: {
        shipment: deliveredShipment,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      error: err,
    });
  }
};

exports.deleteLocation = async (req, res) => {
  try {
    const updatedShipment = await Shipment.updateOne(
      { trackingId: req.body.trackingId },
      { $pull: { locations: { _id: req.body.locId } } }
    );

    if (updatedShipment.nModified === 0) {
      return res.status(404).json({
        status: "fail",
        message: `Shipment location not found!`,
      });
    }

    res.status(200).json({
      status: "success",
      message: `Location deleted successfully`,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: `Could not delete Location`,
    });
  }
};
