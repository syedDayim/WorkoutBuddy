import { workoutModel } from "../models/schema.js";
import mongoose from "mongoose";

class WorkoutController {
  // Gets all workouts
  static homeController = async (req, res) => {
    try {
        const result = await workoutModel.find({}).sort({ createdAt: -1 });
        res.status(200).json(result);
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: error.message });
    }
};

  // Gets one workout
  static getOneData = async (req, res) => {
    const { id } = req.params;

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    try {
      const data = await workoutModel.findById(id);

      if (!data) {
        return res.status(404).json({ error: "Data Not Found" });
      }

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // Posts a Data
  static postData = async (req, res) => {
    const { title, reps, load } = req.body;

    // Simple validation
    if (!title || !reps || !load) {
      return res.status(400).json({ error: "Please provide all required fields" });
    }

    try {
      const newData = new workoutModel({ title, reps, load });
      const result = await newData.save();
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // Deletes a Data
  static deleteData = async (req, res) => {
    const { id } = req.params;

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    try {
      const result = await workoutModel.findByIdAndDelete(id);

      if (!result) {
        return res.status(404).json({ error: "Data Not Found" });
      }

      res.status(200).json({ message: "Data deleted successfully", data: result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
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

      res.status(200).json({ message: "Data updated successfully", data: result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}

export { WorkoutController };
