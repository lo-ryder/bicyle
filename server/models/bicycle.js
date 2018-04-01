var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var bicycleSchema = new mongoose.Schema({
    _id: Number,
    imgUrl: String,
    Title: String,
    Description: String,
    Price: Number,
    Location: String,
    Owner: {
        Oid: Number,
        Name: String,
        Email: String
      }
  }, { timestamps: true});
bicycleSchema.plugin(autoIncrement.plugin, { model: 'Bicycle', field: '_id' });
var Bicycle = mongoose.model('Bicycle', bicycleSchema);

var userSchema = new mongoose.Schema({
    _id: Number,
    FirstName: String,
    LastName: String,
    Email: String,
    Password: String,
  }, { timestamps: true});

userSchema.plugin(autoIncrement.plugin, { model: 'User', field: '_id' });
var User = mongoose.model('User', userSchema);
