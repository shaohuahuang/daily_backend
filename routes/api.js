var express = require('express');
var router = express.Router({
	mergeParams : true
});

var expenditure = require('./api_routes/expenditure');
router.use('/expenditures', expenditure);

module.exports = router;