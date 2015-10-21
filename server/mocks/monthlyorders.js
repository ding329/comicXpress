module.exports = function(app) {
  var express = require('express');
  var monthlyordersRouter = express.Router();

  monthlyordersRouter.get('/', function(req, res) {
    res.send({
      'monthlyorders': [
      {
          id:1,
          name: "TRANSFORMERS MORE THAN MEETS EYE #",
          qty: 20,
      },
      {
          id:2,
          name: "UNCANNY X-MEN #",
          qty: 30,
      },

      ]
    });
  });

  monthlyordersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  monthlyordersRouter.get('/:id', function(req, res) {
    res.send({
      'monthlyorders': {
        id: req.params.id
      }
    });
  });

  monthlyordersRouter.put('/:id', function(req, res) {
    res.send({
      'monthlyorders': {
        id: req.params.id
      }
    });
  });

  monthlyordersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/monthlyorders', monthlyordersRouter);
};
