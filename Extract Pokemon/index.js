const fs = require('fs')
const { PokeGeneration, PokeByName } = require('./API')

const GetPokeByPokedex = async (pokeDexNo, FileName) => {
    const pokeEntry = await PokeGeneration.get(`${pokeDexNo}`);
    const pokeList = [];
    for (let i = 0; i < pokeEntry.data.pokemon_entries.length; i++) {
        try {
            console.log(pokeEntry.data.pokemon_entries[i].pokemon_species.name)
            const PokeMon = await PokeByName.get(`${pokeEntry.data.pokemon_entries[i].pokemon_species.name}`);
            pokeList.push(PokeMon.data)
            // console.log('Pokeom',PokeMon.data)
        } catch (e) {
            console.log(e)
        }
    }
    console.log(pokeList.length)
    let pokeJson = JSON.stringify(pokeList);
    fs.writeFileSync(`${FileName}.json`, pokeJson);
    console.log('Done With Json Creation')
}

// GetPokeByPokedex(6, 'sinnoh')
// GetPokeByPokedex(9, 'unova')
// GetPokeByPokedex(15, 'hoenn')
// GetPokeByPokedex(26, 'kanto')
// GetPokeByPokedex(6, 'sinnoh')
GetPokeByPokedex(12, 'Kalos-central')
GetPokeByPokedex(13, 'Kalos-costal')
GetPokeByPokedex(14, 'Kalos-mountain')
// GetPokeByPokedex(22, 'updated-melemele');
// GetPokeByPokedex(23, 'updated-akala');
// GetPokeByPokedex(25, 'updated-akala');
// GetPokeByPokedex(28, 'isle-of-armor');
// GetPokeByPokedex(29, 'crown-tundra');
// GetPokeByPokedex(11, 'conquest-gallery');
