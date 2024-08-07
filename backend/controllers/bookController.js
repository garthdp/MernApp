const Book = require('../models/bookModel')
const mongoose = require('mongoose')

//get books
const getBooks = async(req, res) => {
    const books = await Book.find({}).sort({createAt: -1})
    res.status(200).json(books)
}

const getBook = async(req, res) => {
    const {id} = req.params

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
    try{
        const book = await Book.findByIdAndUpdate(id, {title, author, quantity})
        res.status(200).json({error: 'Updated'})
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

//create new book
const deleteBook = async(req, res) => {
    const {id} = req.params
    try{
        const book = await Book.findByIdAndDelete(id)
        res.status(200).json({error: 'Deleted'})
    }
    catch(e){
        res.status(400).json({error: e.message})
    }
}

module.exports = {
    getBooks, 
    createBook,
    updateBook,
    getBook,
    deleteBook
}