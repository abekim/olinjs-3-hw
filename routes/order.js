/*
 * GET users listing.
 */
var models = require('../models/models')

exports.list = function(req, res) {
  console.log('order list retrieved');
  
  var orders = models.Order.find({}, function (err, docs) {
    if (err)
      return console.log("error listing orders");
    res.render('orders', { title : "List of Orders", orders : docs });
  });
};

exports.create = function(req, res) {
  console.log('new order created with ' + req.body);

  var newOrder = new models.Order({ name: req.body.name, ingreds: req.body.ingreds });

  newOrder.save(function(err) {
    if (err)
      return console.log("error saving order", err);
  });
};

exports.new = function(req, res) {
  var ingreds = models.Ingredient.find(function(err, docs) {
    if(err)
      return console.log("error listing ingredients")
    res.render('newOrder', { title: "Add a New Order", ingreds: docs });
  });
};

exports.delete = function(req, res) {
  models.Order.findOne().where('_id',req.body['id']).remove();
};