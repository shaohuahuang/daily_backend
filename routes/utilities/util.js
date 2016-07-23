exports.getDate = function(date){
	var thisDate = new Date(date);
	return thisDate.getFullYear() + "-" + (thisDate.getMonth()+1) + "-" + thisDate.getDate();
};