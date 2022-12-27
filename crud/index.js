import express from 'express'
const app = express();
import dotenv from 'dotenv'
dotenv.config()
import getAllDoc from './conrollers/retrieveStudent.js';
// import createDoc from './conrollers/studentController.js';
import connectDB from './db/connectdb.js';

const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL



// db
connectDB(DATABASE_URL)
// get all docs
getAllDoc()

// create docs
// createDoc()
// createDoc()
// createDoc("Sam",24,['cricket','coding'],true)



app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})