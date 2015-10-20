module.exports = function(app) {
  var express = require('express');
  var previewselectionsRouter = express.Router();

  previewselectionsRouter.get('/', function(req, res) {
    res.send({
      'previewselections': [
      {
        id:1,
        name:"201509",
      },
      {
        id:2,
        name:"201510",
      },
      ]
    });
  });

  previewselectionsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  previewselectionsRouter.get('/:id', function(req, res) {
    res.send({
      'previewselections': {
        id: req.params.id
      }
    });
  });

  previewselectionsRouter.put('/:id', function(req, res) {
    res.send({
      'previewselections': {
        id: req.params.id
      }
    });
  });

  previewselectionsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/previewselections', previewselectionsRouter);
};
