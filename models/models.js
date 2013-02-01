var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/ingredients');

var ingredSchema = mongoose.Schema({
  name: String,
  price: Number
});

var Ingredient = mongoose.model('Ingredient', ingredSchema);

var orderSchema = mongoose.Schema({
  name: String, 
  ingreds: Array
});

var Order = mongoose.model('Order', orderSchema);

//why does this use module.exports instead of exports? 
//http://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-nodejs
exports.Ingredient = Ingredient;
exports.Order = Order;