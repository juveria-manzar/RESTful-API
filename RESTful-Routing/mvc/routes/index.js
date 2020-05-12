var express = require('express');
var router = express.Router();

let indexCtrl = require("../controllers/index");


router.get('/', indexCtrl.getIndex);

module.exports = router;
