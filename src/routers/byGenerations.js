const express = require('express')
const router = new express.Router()
const GenerationModel = require('../models/pokedata');

// This Route will provide information Related to Pokemon API by their Generations
router.get('/byGeneration', async (req, res) => {
    try {
        const host = req.get('host')
        console.log(host)
        let obj = { Descriptions: "List of Pokemon By Their Region", results: [] };
        for (let i = 0; i <= 7; i++) {
            obj['results'].push({ 'url': `http://${host}/byGeneration/${i + 1}` })
        }
        res.status(200).send(obj);
    } catch (e) {
        res.status(500).send()
    }
})
//This Route will return pokemon By region. 
router.get('/byGeneration/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const PokeByGen = await GenerationModel.find({ GenerationByNumber: _id }).sort({ PokeId: "asc" });
        console.log(PokeByGen)
        res.status(200).send({ count: PokeByGen.length, PokeByGen })
    } catch (e) {
        console.log(e)
        res.status(500).send()
    }
})


module.exports = router
