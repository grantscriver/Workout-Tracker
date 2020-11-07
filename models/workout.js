const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Creates schema for workout database
const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date(new Date().setDate(new Date().getDate()))
        },
        exercises: [
            {

                type: {
                    type: String,
                    trim: true,
                    required: "Enter type of workout"
                },
                name: {
                    type: String,
                    required: "Enter name of workout"
                },
                duration: {
                    type: Number
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    }
);

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;