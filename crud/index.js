import express from 'express'
const app = express();
import dotenv from 'dotenv'
dotenv.config()
import createDoc from './conrollers/studentController.js';
import connectDB from './db/connectdb.js';

const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL



// db
connectDB(DATABASE_URL)

// create docs
createDoc()



app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})