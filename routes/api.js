const router = require("express").Router();
const db = require("../models");


router.get("/api/workouts", (req, res) => {
    //console.log(db)
    db.Workout.find({})
        .sort({ date: 0 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    console.log("got here 7")
    console.log("req.body ", { exercises: req.body })
    db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { day: new Date(new Date().setDate(new Date().getDate())), exercises: req.body } })

        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

module.exports = router