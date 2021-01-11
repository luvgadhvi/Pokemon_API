const express = require('express')
const router = new express.Router()
const GenerationModel = require('../models/pokedata');
//With this get call you will be able to search Pokemon by their name. 
router.get('/searchPokemon', async (req, res) => {
    // ?search=pika -- Query Parameters
    const query = req.query.search;
    const pokeResult = await GenerationModel.aggregate([
        { "$match": { Name: new RegExp(query, "gi") } },
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

    try {
        res.send({ originalCount: pokeResult.length, pokeResult })
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router