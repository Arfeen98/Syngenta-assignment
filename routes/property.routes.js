const express = require("express");
const PropertyModel=require("../models/property.model");
const PropertyController = express.Router();

PropertyController.get("/", async (req, res) => {
  const task = await PropertyModel.find({});
  try {
    res.status(200).send(task);
  } catch (err) {
    res.status(500).send("Internal Server Error!");
  }
});

PropertyController.post("/new", async (req, res) => {
  const Property = new PropertyModel(req.body);
  try {
    await Property.save();
    res.status(201).send({ message: "New task added!", Property });
  } catch (err) {
    res.status(500).send("Internal server error!");
  }
});

PropertyController.patch("/update/:taskId", async (req, res) => {
  const { taskId } = req.params;
  const update = await PropertyModel.findByIdAndUpdate({ _id: taskId }, req.body, {
    new: true,
  });
  res.status(200).send({ message: "Task updated!", update });
});

PropertyController.delete("/delete/:taskId", async (req, res) => {
  const { taskId } = req.params;
  await PropertyModel.findByIdAndDelete({ _id: taskId });
  res.status(200).send({ message: "Task Deleted!" });
});

module.exports = PropertyController;
