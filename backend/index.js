const express = require('express')
const cors = require('cors')
const {dbConnect} = require('./config/db.js')
require('dotenv').config()
const router = require('./routes/route.js')
const mongoose = require('mongoose')

dbConnect()
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use('/api/v1', router)

app.listen(PORT, () => {
    console.log(`Server start at ${PORT}`);
})