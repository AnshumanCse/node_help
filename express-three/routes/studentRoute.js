const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')
const myLogger = require('../middlewares/logger-middleware')

// router lvl middleware 

// router.use(myLogger)
router.use('/student',myLogger)

router.get('/student',studentController)
router.get('/event',(req,res) => {
    res.send("Events")
})

module.exports = router