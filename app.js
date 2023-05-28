const express = require("express");
const app = express();
const cors = require("cors");
const adaptionRouter = require("./routes/v1/grooming.route")


// middleware
app.use(express.json());
app.use(cors());

// routes 
app.use("/api/v1/grooming",adaptionRouter)





// ---------- Happy Server ----------
app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
});









module.exports = app;