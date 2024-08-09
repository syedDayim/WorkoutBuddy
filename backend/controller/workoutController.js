import { workoutModel } from "../models/schema.js";
import mongoose from "mongoose";

class workoutController {
  // Gets all workouts
  static homeController = async (req, res) => {
    try {
      const result = await workoutModel.find({}).sort({ createdAt: -1 });
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // Gets one workout
  static getOneData = async (req, res) => {
    const { id } = req.params;
    const data = await workoutModel.findById(id);
    if (!data) {
      res.status(404).json({ error: "Data Not Found" });
    } else {
      return res.status(200).json(data);
    }
    res.status(200).json(data);
  };

  // Posts a Data
  static postData = async (req, res) => {
    const { title, reps, load } = req.body;
    try {
      const data = await workoutModel({
        title,
        reps,
        load,
      });
      const result = await data.save();
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  };

  // Deletes a Data
  static deleteData = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }
    const result = await workoutModel.findByIdAndDelete({ _id: id });

    res.status(200).json(result);
  };

  // Updated an existing data
  static patchData = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    try {
      const result = await workoutModel.findByIdAndUpdate(id, updateData, {
        new: true,
      });

      if (!result) {
        return res.status(404).json({ error: "Data Not Found" });
      }

      res
        .status(200)
        .json({ message: "Data updated successfully", data: result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}

export { workoutController };
