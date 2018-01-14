const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const mongoose = require('mongoose');
const User = require('./app/models/User'); //created model loading here
const Video = require('./app/models/Video'); //created model loading here
const bodyParser = require('body-parser');
const path = require('path');

   
app.use(express.static(path.join(__dirname, 'trotseeclient/build')));    

// mongoose instance connection url connection
const config = require('./config');

 var uristring =
    config ||
    process.env.MONGOLAB_URL ||
    'mongodb://localhost:27017/trotseeLocal';

mongoose.connection.openUri(uristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/route'); //importing route
routes(app); //register the route

app.listen(port); 

console.log('TrotSee server started on: ' + port);