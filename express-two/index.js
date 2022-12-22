const express = require('express')
const app = express()
const port = 8000;
const web = require('./routes/web')
const {join} = require('path')



// views file

app.set('view engine','ejs')

// static files
 
app.use('/static',express.static(join(process.cwd(), 'public')))

// individual files 
// app.use('/css',express.static(join(process.cwd(), 'public')))

// app.use(express.static('public'))


// routes 
app.use('/',web)




app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})