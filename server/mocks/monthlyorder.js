module.exports = function(app) {
  var express = require('express');
  var monthlyorderRouter = express.Router();

  monthlyorderRouter.get('/', function(req, res) {
    res.send({
      'monthlyorder': [
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

  monthlyorderRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  monthlyorderRouter.get('/:id', function(req, res) {
    res.send({
      'monthlyorder': {
        id: req.params.id
      }
    });
  });

  monthlyorderRouter.put('/:id', function(req, res) {
    res.send({
      'monthlyorder': {
        id: req.params.id
      }
    });
  });

  monthlyorderRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/monthlyorder', monthlyorderRouter);
};
