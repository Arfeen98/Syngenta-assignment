const express = require("express");
const RegionModel=require("../models/region.model");
const RegionController = express.Router();

RegionController.get("/", async (req, res) => {
  const task = await RegionModel.find({});
  try {
    res.status(200).send(task);
  } catch (err) {
    res.status(500).send("Internal Server Error!");
  }
});

RegionController.post("/new", async (req, res) => {
  const Region = new RegionModel(req.body);
  try {
    await Region.save();
    res.status(201).send({ message: "New task added!", Region });
  } catch (err) {
    res.status(500).send("Internal server error!");
  }
});

RegionController.patch("/update/:taskId", async (req, res) => {
  const { taskId } = req.params;
  const update = await RegionModel.findByIdAndUpdate({ _id: taskId }, req.body, {
    new: true,
  });
  res.status(200).send({ message: "Task updated!", update });
});

RegionController.delete("/delete/:taskId", async (req, res) => {
  const { taskId } = req.params;
  await RegionModel.findByIdAndDelete({ _id: taskId });
  res.status(200).send({ message: "Task Deleted!" });
});

module.exports = RegionController;
