var projects = require('../projects.json');
var viewAlts = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response){
  	response.render('index', projects);
};

exports.view = viewAlt(){
	response.render('index', viewAlts)
}