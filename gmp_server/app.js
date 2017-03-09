var express = require('express');
var app = express();

var routes = require('./routes');
var user = require('./routes/user');
var chat = require('./routes/chat');

app.get('/', routes.index);
app.get('/user/join', user.join);
app.get('/chat/list', chat.list);
app.get('/chat/create', chat.create);
app.get('/chat/room', chat.room);

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});
