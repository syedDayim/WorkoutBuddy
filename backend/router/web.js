import express from "express";
import { WorkoutController } from "../controller/workoutController.js";
const router = express.Router();

// Get all data
router.get('/', WorkoutController.homeController);

// Get 1 data
router.get('/:id', WorkoutController.getOneData)

// Post new data
router.post('/', WorkoutController.postData)

// Delete a data
router.delete('/:id', WorkoutController.deleteData)

// Update a data
router.patch("/:id", WorkoutController.patchData)

export default router;
