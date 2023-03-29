const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const router = require("./router")
//OkfL1Yn3UcpDCaI4

//Collection368
mongoose.connect("mongodb+srv://marwanelaksiouer:OkfL1Yn3UcpDCaI4@cluster0.za5ufoz.mongodb.net/?retryWrites=true&w=majority")
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use("/books", router)

module.exports = app