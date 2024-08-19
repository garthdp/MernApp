//calling express
const express = require('express')
const {loginUser, signupUser, logoutUser} = require('../controllers/userController')

const ExpressBrute = require('express-brute')

const store = new ExpressBrute.MemoryStore()
const bruteforce = new ExpressBrute(store)
// login
const router = express.Router()

router.post('/login', bruteforce.prevent, loginUser)

 // signup
router.post('/signup', signupUser)

 // signup
 router.get('/logout', logoutUser)

//export routes
module.exports = router