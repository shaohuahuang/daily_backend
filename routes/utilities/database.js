var pgp = require("pg-promise")();
var cn = {
	host: 'localhost', // 'localhost' is the default;
	port: 5432, // 5432 is the default;
	database: 'mydb',
	user: 'shaohua',
	password: ''
};

var db = pgp(cn);

module.exports.db = db;
module.exports.pgp = pgp;
