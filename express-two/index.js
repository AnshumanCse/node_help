// routing
const express = require('express')
const app = express();
const products = require('./data')
const port = 8000;


// routes 
app.get('/', (req,res) => {
    res.status(200).json(products)
});

// all
app.all('/sabkuchh', (req,res) => {
    res.send('Sabkuchh')
})


app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})