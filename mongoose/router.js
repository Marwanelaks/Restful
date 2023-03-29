const express = require("express")
const route = express.Router() 
const mongoose = require("mongoose")
const Books = require("./schema")

// route.use(express.json())

route.get("/get",async(req,res)=>{
   const books = await Books.find()
   res.status(200).json({ AllBooks : books })
})
route.get( "/:id", async(req,res)=>{
    const bookid = req.params.id
    const bookbyid = await Books.findById(bookid)
    if(!bookbyid){
      return res.status(404).json({ message : "book doesn't exist" })
    }
    res.status(200).json({ BookById : bookbyid })
} )
route.post("/post",(req,res)=>{
   // const author = req.body.author
   // const title = req.body.title
   // const date = req.body.date
   const { auteur,titre,dateparrution } = req.body
   const newBook = new Books({
      _id : new mongoose.Types.ObjectId(),
      author : auteur,
      title : titre,
      published : dateparrution
   })
   newBook.save()
   res.status(200).json({ 
      message:"post method work successfully",
      newbookadded : newBook })
})
route.put("/:Id",async(req,res)=>{
   const { auteur,titre,dateparrution } = req.body
   const bookid = await Books.findByIdAndUpdate(req.params.Id,{author : auteur,title : titre,date : dateparrution},{new:true})
   if(!bookid){
      return(
      res.status(404).json({
         message : "Book not found"
      })
     )
   }
   res.status(200).json({
      message : 'Book informations was updated',
      book : bookid
   })
})

route.delete("/:id" , async(req,res)=>{
   const id = req.params.id
   const deleteBook = await Books.findByIdAndDelete(id)
   if(!deleteBook){
      return(
      res.status(404).json({
         message : "Book with this id not found"
      })
      )
   }
   res.status(200).json({
      message : "Book deleted successfully",
      BookDeleted : deleteBook
   })
})
module.exports = route