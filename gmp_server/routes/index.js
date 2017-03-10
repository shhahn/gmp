/*
 * GET home page.
 */

exports.index = function(req, res){
  //res.render('index', { title: 'Express' });
	
	res.render('login', {title : "login 화면"});
};