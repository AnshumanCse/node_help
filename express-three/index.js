const express = require('express')
const app = express();
const webRoutes = require('./routes/webRoutes')
const port = 5000


//set ejs

app.set("view engine", "ejs")

// routes

app.use('/',webRoutes)




app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})