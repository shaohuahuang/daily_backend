var db = require('../routes/utilities/database');

exports.addItem = function(expenditure){
	var sql = 'insert into expenditures(item,amount,update_on) values (${item},${amount},${update_on}) returning *';
	return db.one(sql, expenditure).catch(function(err){
		console.log(sql, expenditure);
		console.log(err);
	})
};

exports.deleteItem = function (id) {
	var sql = 'delete from expenditures where id = $1';
	return db.none(sql, id).catch(function(err){
		console.log(sql, id);
		console.log(err);
	});
};