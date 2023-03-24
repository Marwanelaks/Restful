const mongoose = require("mongoose")

const Books = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   author : String,
   title : String,
   date : Date
})

module.exports = mongoose.model("Books",Books)