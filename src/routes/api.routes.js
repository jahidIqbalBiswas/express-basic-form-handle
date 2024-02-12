const express = require("express")
const router = express.Router()
const userController = require("../controllers/user.controller")
router.get("/",userController.indexView)
router.get("/register",userController.registerUser)
router.post("/register",userController.registeredUserData)
module.exports = router;