const express = require("express")
const router = express.Router()
const userController = require("../../contoller/user.controller")

router.route("/signup")
.post(userController.createAuser)


router.route("/login")
.post(userController.loginAuser)

module.exports = router;