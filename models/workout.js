const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
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
                    required: "Enter a name for workout"
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
                },
            }
        ]
    });

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;