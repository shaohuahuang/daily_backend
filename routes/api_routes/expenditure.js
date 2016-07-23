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

router.get("/", function(req, res, next){
	var start = req.query.start;
	var end = req.query.end;
	expenditureAPI.getAllItems(start, end).then(function(result){
		res.json(result);
	})
});

router.put("/:expenditure_id", function(req, res, next){
	var id = req.params.expenditure_id;
	var expenditure = {};
	if(req.body.item)
		expenditure.item = req.body.item;
	if(req.body.amount)
		expenditure.amount = req.body.amount;
	if(req.body.update_on)
		expenditure.update_on = req.body.update_on;
	return expenditureAPI.updateItem(id, expenditure).then(function(result){
		res.json(result);
	});
});

module.exports = router;