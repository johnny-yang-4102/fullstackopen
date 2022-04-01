const config = require('./utils/config')
const express = require('express')
const app = express()
const logger = require('./utils/logger')
const blogRouter = require('./controllers/blogs')

const cors = require('cors')
const mongoose = require('mongoose')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error('error connecting to MongoDB:', error.message)
    })

app.use(cors())
app.use(express.json())

app.use(cors())
app.use(express.json())

app.use('', blogRouter)

module.exports = app


