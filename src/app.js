const express = require('express')
require('./db/mongoose')
const byGenerationRouter = require('./routers/byGenerations')
const searchPokemon = require('./routers/searchPokemon');
const app = express()
//Middleware to accept json Response
app.use(express.json())
//Route For Generation API.
app.use(byGenerationRouter)
//Route For Search PokeMon API.
app.use(searchPokemon)
module.exports = app