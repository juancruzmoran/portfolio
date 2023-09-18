const express = require('express');
const router = express.Router();

const {index,info} = require('../controllers/mainController');

router.get('/', index)
.get('/info',info)

module.exports = router;