//Helper Tools Extracting information.
const { getTypes, getAbilities, getMoves, getStats } = require('./helper');
//Model to Load in MongoDb Server.
const AllModel = require('./AllPokemonModel');
//Function of Insert Individual Pokemon Into DataBase.
const LoadPokemon = async (GenerationByNumber, Region, GenerationByString, pokemonList) => {
    for (let i = 0; i < pokemonList.length; i++) {
        try {
            const Types = getTypes(pokemonList[i].types);
            const Abilities = getAbilities(pokemonList[i].abilities)
            const Moves = getMoves(pokemonList[i].moves)
            const Stats = getStats(pokemonList[i].stats)
            //Creating The Model.
            const Pokemon = new AllModel({
                GenerationByNumber,
                GenerationByString,
                Region,
                Name: pokemonList[i].name,
                PokeId: pokemonList[i].id,
                Height: pokemonList[i].height,
                Weight: pokemonList[i].weight,
                Order: pokemonList[i].order,
                Sprites: [pokemonList[i].sprites.other["official-artwork"]["front_default"], pokemonList[i].sprites.other["dream_world"]["front_default"]],
                Types,
                Abilities,
                Base_Experience: pokemonList[i].base_experience,
                Moves,
                Stats
            })
            //Saving Into DataBase.
            Pokemon.save()
        }
        catch (e) {
            console.log(e);
        }
    }
    console.log(`Done With ${Region} ${GenerationByString}`)
    console.log(`Total ${pokemonList.length} pokemon Load for ${Region}${GenerationByString}`)
}


module.exports = { LoadPokemon };