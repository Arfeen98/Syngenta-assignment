const express = require("express");
const OrganizationModel=require("../models/organizations.model");
const OrganizationController = express.Router();

OrganizationController.get("/", async (req, res) => {
  const task = await OrganizationModel.find({});
  try {
    res.status(200).send(task);
  } catch (err) {
    res.status(500).send("Internal Server Error!");
  }
});

OrganizationController.post("/new", async (req, res) => {
  const Organization = new OrganizationModel(req.body);
  try {
    await Organization.save();
    res.status(201).send({ message: "New task added!", Organization });
  } catch (err) {
    res.status(500).send("Internal server error!");
  }
});

OrganizationController.patch("/update/:taskId", async (req, res) => {
  const { taskId } = req.params;
  const update = await OrganizationModel.findByIdAndUpdate({ _id: taskId }, req.body, {
    new: true,
  });
  res.status(200).send({ message: "Task updated!", update });
});

OrganizationController.delete("/delete/:taskId", async (req, res) => {
  const { taskId } = req.params;
  await OrganizationModel.findByIdAndDelete({ _id: taskId });
  res.status(200).send({ message: "Task Deleted!" });
});

module.exports = OrganizationController;
