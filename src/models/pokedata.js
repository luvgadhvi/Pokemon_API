const mongoose = require('mongoose');
//Pokemon Model to get required data.
const ByGenerationSchema = new mongoose.Schema({
    GenerationByNumber: {
        type: Number,
        required: true,
        trim: true
    },
    Region: {
        type: String,
        required: true,
        trim: true
    },
    GenerationByString: {
        type: String,
        required: true,
        trim: true
    },
    Name: {
        type: String,
        required: true,
        trim: true
    },
    PokeId: {
        type: Number,
        required: true,
        trim: true
    },
    Height: {
        type: Number,
        required: true,
        trim: true
    },
    Weight: {
        type: Number,
        required: true,
        trim: true
    },
    Order: {
        type: Number,
        required: true,
        trim: true
    },
    Sprites: {
        type: [String],
        required: true,
        trim: true
    },
    Types: {
        type: [String],
        required: true,
        trim: true
    },
    Abilities: {
        type: [String],
        required: true,
        trim: true
    },
    Base_Experience: {
        type: String,
        required: true,
        trim: true
    },
    Moves: {
        type: [String],
        required: true,
        trim: true
    },
    Stats: {
        type: [mongoose.Schema.Types.Mixed],
        required: true,
        trim: true
    },
})

const PokeByGeneration = mongoose.model('PokeByGeneration', ByGenerationSchema)

module.exports = PokeByGeneration