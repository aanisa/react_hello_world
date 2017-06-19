var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//set port
app.set('port', process.env.PORT || 9000);

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public/'));


app.listen(app.get('port'), function () {
  console.log('listening on port: ', app.get('port'));
});

module.exports = app;
