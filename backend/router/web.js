import express from "express";
import { workoutModel } from '../models/schema.js';

const router = express.Router();

// Get all data
router.get('/', (req, res) => {
    res.send({msg: "Get All Data"});
})

// Get 1 data
router.get('/:id', (req, res) => {
    
    res.send({msg: "Get 1 data"});
})

// Post new data
router.post('/', async (req, res) => {
    const {title, reps, load} = req.body;
    try {
        const data = await workoutModel({
            title,
            reps,
            load
        });
        const result = await data.save();
        res.status(200).json(result);
        
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
})

// Delete a data
router.delete('/:id', (req, res) => {
    res.send({msg: "Delete a data"});
})

// Update a data
router.patch("/:id", (req, res) => {
    res.send({msg: "Update a data"})
})


export default router;
