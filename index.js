require('dotenv').config()
require ('./DB/connection')
const router = require('./Routes/router')
const express = require('express')
const cors = require('cors')

const server = express()

server.use(cors())
server.use(express.json())
server.use(router)
server.use('/uploads',express.static("./uploads"))

const PORT = 4000 || process.env.PORT

server.listen(PORT,()=>{
    console.log(`EMS server statred at port...🚀 ${PORT}`);
})

server.get("/",(req,res)=>{
    res.send("<h1>EMS server statred</h2>")
})