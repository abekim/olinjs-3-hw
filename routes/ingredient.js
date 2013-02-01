var models = require('../models/models')

exports.submitNew = function(req, res) {
  console.log('Add a New Ingredient');
  res.render('newIngredient', {title: "Add a New Ingredient"});
};

exports.create = function(req, res) {
  console.log('Added a new ingredient', req.body);
  var ingred = new models.Ingredient({ name: req.body.ingredient, price: req.body.price });
  ingred.save(function (err) {
    if (err)
      return console.log("error saving" + ingred.name);
    res.send('You\'ve added ' + req.body.ingredient + ' that costs $' + req.body.price + '!');
  });
};