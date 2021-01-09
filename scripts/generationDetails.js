//Pokemon Information According to Region and Generations.
const GenerationDetails = [
    { generation: 'Generation I', region: 'Kanto Region', generationValue: 1, Data: require("./Pokedata-By-Generations/Kanto_Region.json") },
    { generation: 'Generation II', region: 'Johto Region', generationValue: 2, Data: require("./Pokedata-By-Generations/Johto_Region.json") },
    { generation: 'Generation III', region: 'Hoenn Region', generationValue: 3, Data: require("./Pokedata-By-Generations/Hoenn_Region.json") },
    { generation: 'Generation IV', region: 'Sinnoh Region', generationValue: 4, Data: require("./Pokedata-By-Generations/Sinnoh_Region.json") },
    { generation: 'Generation V', region: 'Unova Region', generationValue: 5, Data: require("./Pokedata-By-Generations/Unova_Region.json") },
    { generation: 'Generation VI', region: 'Kalos Region', generationValue: 6, Data: require("./Pokedata-By-Generations/Kalos_Region.json") },
    { generation: 'Generation VII', region: 'Alola Region', generationValue: 7, Data: require("./Pokedata-By-Generations/Alola_Region.json") },
    { generation: 'Generation VIII', region: 'Galar1 Region', generationValue: 8, Data: require("./Pokedata-By-Generations/Galar1_Region.json") },
]

module.exports = GenerationDetails