const express = require('express')
const app = express()
const web = require('./routes/web')
const underConstruction = require('./middlewares/uc-middleware')
const port = 8000;


// application vlvl middl
app.use('/about',underConstruction)
// app.use(underConstruction)

// set ejs

app.set('view engine','ejs')

// routes

app.use('/',web)


app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})
