var requestPromise = require('request-promise');

exports.getRequest = function(url){
	return requestPromise({
		url: url,
		method: "GET"
	})
};

exports.postRequest= function(url, payload){
	return requestPromise({
		url: url,
		method: "POST",
		json: true,
		body: payload
	})
};

exports.putRequest= function(url, payload){
	return requestPromise({
		url: url,
		method: "PUT",
		json: true,
		body: payload
	})
};