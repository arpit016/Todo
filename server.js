var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Try it out',
	complted: false
}, {
	id: 2,
	description: 'Second to do',
	completed: false
}];

app.get('/', function (req, res) {
	res.send('Todo API Root');

});

// GET /todos

app.get('/todos', function (req, res) {
	res.json(todos);
});

app.get('/todos/:id', function (req, res) {
	var todoid = req.params.id;
	var matchedtodo;
	for (var i=0; i < todos.length; i++) {
		if(todos[i].id == todoid) {
			matchedtodo = todos[i];
		}
	}
	if (matchedtodo) {
		res.json(matchedtodo);
	}
	else {
		res.status(404).send("No such ID");
	}
});

app.listen(PORT, function() {
	console.log('Express listening on port: '+ PORT);
});