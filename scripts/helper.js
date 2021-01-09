//Function to Extract Pokemon Type.
const getTypes = (types) => {
    let type = []
    for (let i = 0; i < types.length; i++) {
        type.push(types[i].type.name)
    }
    return type
}
//Function to Extract Pokemon Ability.
const getAbilities = (abilities) => {
    let ability = []
    for (let i = 0; i < abilities.length; i++) {
        ability.push(abilities[i].ability.name)
    }
    return ability
}
//Function to Extract Pokemon Moves.
const getMoves = (moves) => {
    let pokeMove = [];
    for (let i = 0; i < moves.length; i++) {
        pokeMove.push(moves[i].move.name)
    }
    return pokeMove
}
//Function to Extract Pokemon Statics.
const getStats = (stats) => {
    let stat = [];
    for (let i = 0; i < stats.length; i++) {
        let obj = {
            base_stat: stats[i].base_stat,
            effort: stats[i].effort,
            statName: stats[i].stat.name
        }
        stat.push(obj)
    }
    return stat
}

module.exports = {getTypes, getAbilities, getMoves, getStats }