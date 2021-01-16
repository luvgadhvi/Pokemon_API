const axios = require('axios')

//API to get Pokemon by their Generation Number
const PokeGeneration = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokedex",
})

//API to get Pokemon by Their Name.
const PokeByName = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon",
})

module.exports = { PokeGeneration, PokeByName }