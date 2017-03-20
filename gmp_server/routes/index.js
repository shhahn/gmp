/*
 * GET home page.
 */

exports.index = function(req, res){
	//res.render('index', { title: 'Express' });
	
	var mysql      = require('mysql');
	var connection = mysql.createConnection({
		host     : 'tyrion.kr',
		user     : 'root',
		password : '1q2w3e',
		port     : "8889",
		database : "gmp"
	});

	connection.connect();

	connection.query('SELECT * from test_table', function(err, rows, fields) {
	  if (!err)
	    console.log('The solution is: ', rows);
	  else
	    console.log('Error while performing Query.', err);
	});

	connection.end();
	
	res.render('login', {title : "login 화면"});
};