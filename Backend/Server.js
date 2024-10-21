require('dotenv').config()
const express =require('express')
const bookRouter = require('./Book/Book')
const app=express()


const mongoose = require('mongoose')
const cors = require('cors');
app.use(cors());

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next() 
})

app.use('/api/book',bookRouter)

mongoose.connect('mongodb+srv://khys:karatekhys@mernapp.xauyr.mongodb.net/?retryWrites=true&w=majority&appName=MERNapp')
.then(() => {
    app.listen(process.env.PORT,()=>{
        console.log('Connected to database & listening on port',process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})


