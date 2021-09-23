function viewCreateTodo(req, res) {
  res.send('View create todo');
}

function viewModifyTodo(req, res) {
  res.send('View modify todo');
}

function viewDeleteTodo(req, res) {
  res.send('View delete todo');
}

module.exports.viewCreateTodo = viewCreateTodo;
module.exports.viewModifyTodo = viewModifyTodo;
module.exports.viewDeleteTodo = viewDeleteTodo;
