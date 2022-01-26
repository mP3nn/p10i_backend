const express = require('express')
const apiRouter = require('./routes/api')
const loginRouter = require('./routes/login')
const morgan = require('morgan')
const { MongoClient } = require('mongodb')
const cors = require('cors')
require('dotenv').config()

const allowedOrigins = ['http://localhost', 'https://p10i.it']

// get db URI from .env file
const dbURI = process.env.URI

const app = express()
// global cors, route-specific won't work for POST reqs
app.use(cors(allowedOrigins))
// for parsing post requests
app.use(express.json())
// logger
app.use(morgan('dev'))

app.use('/api', apiRouter)
app.use('/login', loginRouter)

app.get('/', (req, res) => {
    res.send('Try /api ;)');
})
// synchronous connection to DB
MongoClient.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, database) => {
    if (err) {
        console.error(err)
    }

    app.locals.db = database
    app.listen(8800)
})

