const insertUniqueValue = async () => {
    //Model to Load into MongoDb Server.
    const GenerationModel = require('../src/models/pokedata');
    const AllModel = require('./AllPokemonModel');
    //This Function will create new model in db that will have unique pokemon.
    const pokemonList = await AllModel.aggregate([
        { "$match": { Name: new RegExp('', "gi") } },
        {
            $group: {
                _id: '$Name',
                detail: { $first: '$$ROOT' },
                count: {
                    $sum: 1,
                },
            },
        },
        {
            $replaceRoot: {
                newRoot: { $mergeObjects: [{ count: '$count' }, '$detail'] },
            },
        }])
    console.log(pokemonList.length);
    for (let i = 0; i < pokemonList.length; i++) {
        try {
            const Pokemon = new GenerationModel({
                GenerationByNumber: pokemonList[i].GenerationByNumber,
                GenerationByString: pokemonList[i].GenerationByString,
                Region: pokemonList[i].Region,
                Name: pokemonList[i].Name,
                PokeId: pokemonList[i].PokeId,
                Height: pokemonList[i].Height,
                Weight: pokemonList[i].Weight,
                Order: pokemonList[i].Order,
                Sprites: pokemonList[i].Sprites,
                Types: pokemonList[i].Types,
                Abilities: pokemonList[i].Abilities,
                Base_Experience: pokemonList[i].Base_Experience,
                Moves: pokemonList[i].Moves,
                Stats: pokemonList[i].Stats
            })
            //Saving Into DataBase.
            await Pokemon.save()
        }
        catch (e) {
            console.log(e);
        }
    }
    console.log("Done With Unique value");

}

module.exports = insertUniqueValue;