var express = require('express');
var moment = require('moment');
var util = require('../utilities/util');
var router = express.Router({
	mergeParams : true
});
var expenditureAPI = require('../../data/expenditure');

router.post("/", function(req, res, next){
	var expenditure = {
		item: req.body.item,
		amount: req.body.amount,
		update_on: req.body.update_on || new Date()
	};
	expenditureAPI.addItem(expenditure).then(function(result){
		res.json(result);
	})
});

module.exports = router;