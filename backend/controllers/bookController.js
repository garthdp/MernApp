const Book = require('../models/bookModel')
const mongoose = require('mongoose')

//get books
const getBooks = async(req, res) => {
    const books = await Book.find({}).sort({createAt: -1})
    res.status(200).json(books)
}

const getBook = async(req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "Invalid id"})
    }

    const book = await Book.findById(id)
    if (!book){
        return res.status(404).json({error: 'No book found'})
    }
    res.status(200).json({book})
}

//create new book
const createBook = async(req, res) => {
    const {title, author, quantity} = req.body
    try{
        const book = await Book.create({title, author, quantity})
        res.status(200).json(book)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

//create new book
const updateBook = async(req, res) => {
    const {id} = req.params
    const {title, author, quantity} = req.body

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "Invalid id"})
    }

    const book = await Book.findByIdAndUpdate(id, {title, author, quantity})

    if (!book){
        return res.status(404).json({error: 'No book found'})
    }
    res.status(200).json("Updated")
}

//create new book
const deleteBook = async(req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "Invalid id"})
    }

    const book = await Book.findByIdAndDelete({_id: id})

    if (!book){
        return res.status(404).json({error: 'No book found'})
    }
    res.status(200).json({status : 'Deleted'})
}

module.exports = {
    getBooks, 
    createBook,
    updateBook,
    getBook,
    deleteBook
}