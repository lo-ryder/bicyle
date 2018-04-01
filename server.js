var express = require('express');
var path = require('path');
var port = process.env.PORT || 8000;
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname + '/bicycle-app/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true }));

require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(port, function(){ console.log('Listening Port: ', port);})
