import express from "express";

import { workoutController } from "../controller/workoutController.js";
const router = express.Router();

// Get all data
router.get('/', workoutController.homeController);

// Get 1 data
router.get('/:id', workoutController.getOneData)

// Post new data
router.post('/', workoutController.postData)

// Delete a data
router.delete('/:id', workoutController.deleteData)

// Update a data
router.patch("/:id", workoutController.patchData)

export default router;
