const express = require("express")
const router = express.Router()
const userController = require("../../contoller/user.controller")

router.route("/")
.post(userController.createAuser)

module.exports = router;