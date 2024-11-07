var express = require('express');
var router = express.Router();

const ctlrMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctlrMain.index);

module.exports = router;
