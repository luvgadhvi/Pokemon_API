const express = require('express')
require('./db/mongoose')
const byGenerationRouter = require('./routers/byGenerations')
const app = express()

app.use(express.json())
//Middle For Generation Router.
app.use(byGenerationRouter)

module.exports = app