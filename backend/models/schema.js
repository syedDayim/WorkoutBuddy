import mongoose from "mongoose";

const schema = {
    title:{
        type: String,
        required: true
    },
    reps:{
        type: Number,
        required: true
    },
    load:{
        type: Number,
        required: true
    },
};

const workoutSchema = new mongoose.Schema(schema, { timestamps: true });
const workoutModel = new mongoose.model('workout', workoutSchema);

export { workoutModel };