const express = require('express')
const app = express();
const webRoutes = require('./routes/webRoutes')
const student = require('./routes/studentRoute')
// const myLogger = require('./middlewares/logger-middleware')

const port = 5000


//set ejs

app.set("view engine", "ejs")

// application levl middleware
// app.use(myLogger)  
// app.use('/about',myLogger)

// routes

app.use('/',webRoutes)
app.use('/',student)




app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})