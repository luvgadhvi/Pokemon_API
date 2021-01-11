const app = require('./app');
const port = process.env.PORT;

//Loading the initial route for node Applications.
app.get('/', (req, res) => {
    const host = req.get('host');
    const apiDescription =
        [
            {
                "Descriptions": "This Api will give to information related to pokemon by their region",
                "url": `http://${host}/byGeneration`
            },
            {
                "Descriptions": "API on How to Search Your Desired Pokemon",
                "url": `http://${host}/searchPokemon`
            }
        ]

    res.status(200).send(apiDescription);
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})