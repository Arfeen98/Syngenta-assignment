const express = require("express");
const FieldModel=require("../models/field.model");
const FieldController = express.Router();

FieldController.get("/", async (req, res) => {
  const task = await FieldModel.find({});
  try {
    res.status(200).send(task);
  } catch (err) {
    res.status(500).send("Internal Server Error!");
  }
});

FieldController.post("/new", async (req, res) => {
  const Field = new FieldModel(req.body);
  try {
    await Field.save();
    res.status(201).send({ message: "New task added!", Field });
  } catch (err) {
    res.status(500).send("Internal server error!");
  }
});

FieldController.patch("/update/:taskId", async (req, res) => {
  const { taskId } = req.params;
  const update = await FieldModel.findByIdAndUpdate({ _id: taskId }, req.body, {
    new: true,
  });
  res.status(200).send({ message: "Task updated!", update });
});

FieldController.delete("/delete/:taskId", async (req, res) => {
  const { taskId } = req.params;
  await FieldModel.findByIdAndDelete({ _id: taskId });
  res.status(200).send({ message: "Task Deleted!" });
});

module.exports = FieldController;
