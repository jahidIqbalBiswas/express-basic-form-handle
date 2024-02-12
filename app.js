const express = require("express")
const router = require("./src/routes/api.routes")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use("/user",router)
module.exports = app;