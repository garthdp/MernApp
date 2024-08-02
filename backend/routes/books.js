//calling express
const express = require('express')
const Book = require('../models/bookModel')

// create instance of router
const router = express.Router()

router.post('/', async (req, res) => {
    const {title, author, quantity} = req.body
    try{
        const book = await Book.create({title, author, quantity})
        res.status(200).json(book)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
})

 // Fetch all books from the database
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        console.log(books.toString())
        res.status(200).json(books);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

//get one book
router.get('/:title', async (req, res) => {
    const {title} = req.params
    try{
        const book = await Book.findOne({title})
        if (book){
            res.status(200).json(book)
        }
        else{
            res.status(404).json({message: 'Book not found'})
        }
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
})

//Delete book
router.delete('/:id', (req, res) => {
    res.json({msg: 'Delete specific book'})
})

//Update book
router.patch('/:id', (req, res) => {
    res.json({msg: 'Update specific book'})
})

module.exports = router