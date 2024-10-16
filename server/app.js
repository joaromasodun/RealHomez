const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const port = 8000
require('dotenv').config()

const userRoute = require('./routes/userRoute')
const propertyRoute = require('./routes/propertyRoute')

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/api/v1/users', userRoute)
app.use('/api/v1/properties', propertyRoute)


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI)
    console.log(`MongoDB Connected`)
  } catch (err) { 
      console.log(`Error: ${err.message}`)
      process.exit(1)
  }
}

connectDB()

app.listen(port, () => console.log(`app listening on ${port}`))