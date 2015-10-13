module.exports = function(app) {
  var express = require('express');
  var catalogsRouter = express.Router();

  catalogsRouter.get('/', function(req, res) {
    res.send({
      'catalogs': [
           {
          id:1,
          name: "TRANSFORMERS MORE THAN MEETS EYE #47",
          price: "3.99",
          catalogId: "201509",
          itemId: "SEP150367",
          discountCode: "E",
          categoryCode: "1",
          orderDate: "2015-11-02",
          sellDate: "2015-11-25",
          qty: 0,
      },
      {
          id:2,
          name: "BLACK SCIENCE PREMIERE HC BEGINNERS GUIDE TO ENTROPY",
          price: "49.99",
          catalogId: "201509",
          itemId: "SEP150588",
          discountCode: "D2",
          categoryCode: "3",
          orderDate: "2015-11-02",
          sellDate: "2015-11-25",
          qty: 0,
      },
      {
          id:3,
          name: "GAME OF THRONES STATUE ARYA STARK (DEC130145)",
          price: "225.00",
          catalogId: "201510",
          itemId: "OCT150132",
          discountCode: "U3",
          categoryCode: "10",
          orderDate: "2015-09-03",
          sellDate: "2015-11-11",
          qty: 0,
      },
      {
          id:4,
          name: "UNCANNY X-MEN #1",
          price: "3.99",
          catalogId: "201510",
          itemId: "OCT150769",
          discountCode: "D4",
          categoryCode: "1",
          orderDate: "2015-11-02",
          sellDate: "2015-12-02",
          qty: 0,
      }
      ]
    });
  });

  catalogsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  catalogsRouter.get('/:id', function(req, res) {
    res.send({
      'catalogs': {
        id: req.params.id
      }
    });
  });

  catalogsRouter.put('/:id', function(req, res) {
    res.send({
      'catalogs': {
        id: req.params.id
      }
    });
  });

  catalogsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/catalogs', catalogsRouter);
};
