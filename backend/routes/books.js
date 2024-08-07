//calling express
const express = require('express')
const {createBook, getBooks, getBook, updateBook, deleteBook} = require('../controllers/bookController')

// create instance of router
const router = express.Router()

router.post('/', createBook)

 // Fetch all books from the database
router.get('/', getBooks)

//get one book
router.get('/:id', getBook)

//Delete book
router.delete('/:id', deleteBook)

//Update book
router.patch('/:id', updateBook)

module.exports = router