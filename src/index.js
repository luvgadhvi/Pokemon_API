const app = require('./app');


const port = process.env.PORT

console.log(process.env)

app.get('/',(req, res)=>{
    res.status(200).send('Welcome To PokeAPI')
})
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})