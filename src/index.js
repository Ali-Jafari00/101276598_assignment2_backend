const express = require('express')
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv").config()

const route = require("./route/employeeRoute");

const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT;
const db = process.env.DB;

mongoose.connect(db)
.then(() => {
    console.log('Database connection successful')
})
.catch(err => {
    console.error('Database connection error')
})

app.get('/api/v1', (req, res) => {
  res.send({"name": "Assignment 2 - Employee Management"})
})

app.use('/api/v1', route)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})