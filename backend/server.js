//calling express
//define all constants
require('dotenv').config()
const express = require('express')
const bookRoutes = require('./routes/books')
const mongoose = require('mongoose')

//creating express package
const app = express()

//setting up routes
//'/' for url request, req is the request, res is the response
// app.get('/', (req, res) =>{
//     res.json({msg: "Testing 123- just figuring this out!"})
// })

//sanitize json requests
app.use(express.json())

//middleware
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

app.use('/api/books', bookRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected successfully")
        })
})
.catch((error)=>{
    console.log(error)
})
// listens for requests from specific port
// app.listen(process.env.PORT, ()=> {
//     console.log('Listening on port 3000')
// })
