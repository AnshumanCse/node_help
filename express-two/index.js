const express = require('express')
const app = express()
const port = 8000;

// route params
// /:type(post | article)/:id

// app.get('/student/:product/:id([0-9]){2}', (req,res) => {
//     console.log(req.params);
//     const { product,id } = req.params;
//     res.json(`Product ${product} and id is ${id}`)
// })

// app.get('/train/:from-:to', (req,res) => {
//     console.log(req.params)
//     const { from,to } = req.params;
//     res.send(`Travelling from : ${from} to ${to}`)
// })

// app.param()

// app.param('id',(req,res,next,id) => {
//     console.log(`Id: ${id}`)
//     next()
// })
// app.get('/user/:id',(req,res) => {
//     console.log("This is user id")
//     res.send("Response Ok")
// })

// app.params using arrays
// app.param(['id','page'], (req,res,next,value) => {
//     console.log(`Called only once: ${value}`)
//     next()
// } )

// app.get('/user/:id/:page', (req,res) => {
//     console.log("Working")
//     res.send('REsponse OK')
// })

// query string
app.get('/product', (req,res) => {
    console.log(req.query)
    res.send(`Everything is ok `)
})




app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})