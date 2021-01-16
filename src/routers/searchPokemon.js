const express = require('express')
const router = new express.Router()
const GenerationModel = require('../models/pokedata');
const fs = require('fs');
//With this get call you will be able to search Pokemon by their name.
router.get('/searchPokemon', async (req, res) => {
    // ?search=pika -- Query Parameters
    const query = req.query.search;
    const pokeResult = await GenerationModel.find(
        {
            $or: [
                { "Name": new RegExp(query, "gi") }
            ]
        }
    )

    try {
        res.send({ count: pokeResult.length, pokeResult })
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router