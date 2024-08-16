//calling express
const express = require('express')
const {loginUser, signupUser} = require('../controllers/userController')

// login
const router = express.Router()

router.post('/login', loginUser)

 // signup
router.post('/signup', signupUser)

//export routes
module.exports = router