var express = require('express'); 
var router = express.Router();
let misc = require('./misc')

router.post("/fpr", misc.fingerprint);

module.exports = router;