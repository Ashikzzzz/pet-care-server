const express = require("express")
const router = express.Router()
const userController = require("../../contoller/user.controller")
const verifyToken = require("../../middlewers/verifyToken")

router.route("/signup")
.post(userController.createAuser)


router.route("/login")
.post(userController.loginAuser)

router.get("/me", verifyToken, userController.getMe);

module.exports = router;