const express = require('express')
const path = require('path')
const app = express()

const port = 8000;
// setup static and middleware

app.use(express.static('../public'))

app.get('/', (req,res) => {
    res.json({name:'deepak'})

})
// app.get('/', (req,res) => {
//     res.sendFile(path.resolve(__dirname, '../express/index.html'))

// })

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})