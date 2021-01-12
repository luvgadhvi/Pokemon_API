require('../src/db/mongoose')
const GenerationDetails = require('./generationDetails.js')
const { LoadPokemon } = require('./dbScript')
const GenerationModel = require('../src/models/pokedata');
const insertUniqueValue = require('./filterData');
//Load The data By Generations. 
GenerationDetails.map((generationList) => {
    console.log(`Started With ${generationList.region} ${generationList.generation}`)
    LoadPokemon(generationList.generationValue, generationList.region,
        generationList.generation, generationList.Data);
})
insertUniqueValue();




