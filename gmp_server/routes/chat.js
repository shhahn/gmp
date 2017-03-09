exports.list = function(req, res){
  //res.render('index', { title: 'Express' });
	
	res.send('채팅방 리스트 화면');
};

exports.create = function(req, res){
	  
	res.send('채팅방 개설 화면');
};

exports.room = function(req, res){
	  
	res.send('채팅방 화면');
};