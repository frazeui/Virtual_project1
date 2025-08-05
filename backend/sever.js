const express = require('express')
const {cors}=require('cors')
const { default: mongoose } = require('mongoose')
const path = require('path')
const { urlencoded } = require('body-parser')
const model=require('./config/database')

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'../frontend')));
app.use(cors());


const app = express()
const port = 3000

// From frontend we'll picking the file
app.get('/', (req, res) => res.sendFile(path.join(__dirname,'../frontend/index.html')));



app.listen(port, () => console.log(`Example app listening on port ${port}!`))