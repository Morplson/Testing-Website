var express = require('express');
var router = express.Router();

var index = require('./index');

////////////////// POST ///////////////////
router.get("/", index.index);
router.get("/trolled", index.trolled);
router.get("/bingus", index.bingus);

module.exports = router;
