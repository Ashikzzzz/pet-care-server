const express = require("express");
const app = express();
const cors = require("cors");
const adaptionRouter = require("./routes/v1/grooming.route")
const signupRouter = require("./routes/v1/user.route")



// middleware
app.use(express.json());
app.use(cors());

// routes 
app.use("/api/v1/grooming",adaptionRouter)
app.use("/api/v1/user",signupRouter)
app.use("/api/v1/user",signupRouter)





// ---------- Happy Server ----------
app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
});









module.exports = app;