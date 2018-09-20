const todosController = require('../controllers').todos;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'The todo API',
  }));

  app.post('/api/todos', todosController.create);
};