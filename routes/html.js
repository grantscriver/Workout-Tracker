const router = require("express").Router();
const path = require("path");

// Gets the exercise.html file to display when you are on the exercise page
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});
// Gets the stats.html file to display when you are on the dashboard page
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

module.exports = router;
