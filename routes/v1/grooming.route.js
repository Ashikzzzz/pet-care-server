const express = require("express")
const groomingController= require("../../contoller/grooming.controller")
const router = express.Router()


router.route("/")
.post(groomingController.createAgrooming)


module.exports = router;