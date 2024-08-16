const User = require('../models/userModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    jwt.sign({_id}, process.env.SECRET_KEY, {expiresIn: '3d'})
}

//login user
const loginUser = async(req, res) => {
    const {email, password} = req.body
    try{
        const user = await User.login(email, password)

        // after sign up, but just before reponse form server
        const token = createToken(user._id)
        res.status(200).json({email, token})
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

//sign up user
const signupUser = async(req, res) => {
    const {email, password} = req.body
    try{
        const user = await User.signup(email, password)

        // after sign up, but just before reponse form server
        const token = createToken(user._id)
        res.status(200).json({email, token})
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    loginUser, 
    signupUser
}