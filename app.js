var express = require("express");
var bodyParser = require('body-parser');
var routes = require("./routes/api");
var app = express();
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: false, limit: '5mb'}));


app.use('/api', routes);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});



app.listen(3000, function () {
	console.log("app started");
});