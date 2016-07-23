var database = require('../routes/utilities/database');
var db = database.db;
var pgp = database.pgp

exports.addItem = function(expenditure){
	var sql = 'insert into expenditures(item,amount,update_on) values (${item},${amount},${update_on}) returning *';
	return db.one(sql, expenditure).catch(function(err){
		console.log(sql, expenditure);
		console.log(err);
	})
};

exports.getAllItems = function(start, end){
	var sql = 'select * from expenditures where update_on between $1 and $2';
	return db.any(sql, [start, end]).catch(function(err){
		console.log(sql, start, end);
		console.log(err);
	})
};

exports.updateItem = function(id, expenditure){
	var array = [
		id,
		expenditure.item,
		expenditure.amount,
		expenditure.update_on
	];
	return db.proc('update_expenditure_record', array).catch(function(err){
		console.log(array);
		console.log(err);
	});
};

exports.deleteItem = function (id) {
	var sql = 'delete from expenditures where id = $1';
	return db.none(sql, id).catch(function(err){
		console.log(sql, id);
		console.log(err);
	});
};