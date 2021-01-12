const axios = require('axios')
const PokeGeneration = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokedex",
})
const PokeByName = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon",
})

module.exports = { PokeGeneration, PokeByName }