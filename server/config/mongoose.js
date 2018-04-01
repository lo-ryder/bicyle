var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.connect('mongodb://localhost/bicycle');
mongoose.connection.on('connected', () => {
  console.log('Listening to the db!');
});


autoIncrement.initialize(connection);

var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    require(models_path + '/' + file);
  }
});