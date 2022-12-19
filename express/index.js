const express = require('express')
const app = express();
const logger = require('./middleware')
const auth = require('./autharize')
const morgan  = require('morgan')
const { people } = require('./data')

const port = 8000;

// static assets
app.use(express.static('./public'))

app.get('/api/people', (req,res) => {
    res.status(200).json({success:true,data:people})
})



// middleware 
// app.use([logger,auth])
// app.use(morgan('tiny'))

// app.get('/', (req,res) => {
    
//     res.send('Home Page')
// })
// app.get('/about', (req,res) => {
//     res.send('About Page')
// })
// app.get('/api/products', (req,res) => {
//     res.send('Product Page')
// })
// app.get('/api/items', (req,res) => {
//     console.log(req.user)
//     res.send('Item Page')
// })


app.listen(port, () => {
    console.log("server is running at 8000")
})