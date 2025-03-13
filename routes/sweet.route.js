const express = require('express')
const {handleGetAllSweet} = require('../controller/sweet.ctrl')

const router = express.Router()

router.get('/all',handleGetAllSweet);

module.exports = router;