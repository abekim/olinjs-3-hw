
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Jessica\'s Burgers 2.0' });
};