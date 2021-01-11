const express = require('express')
const router = new express.Router()
const GenerationModel = require('../models/pokedata');

router.get('/byGeneration/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const PokeByGen = await GenerationModel.find({GenerationByNumber:_id})

        res.status(200).send({count:PokeByGen.length,PokeByGen})
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router
