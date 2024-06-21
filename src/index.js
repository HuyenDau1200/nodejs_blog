const path = require('path');
const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');

const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

//Middleware to handle data from submit form
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//http logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

      // Route inits
route(app);

//127.0.0.1 
        app.listen(port, () => {
          console.log(`Example app listening on port ${port}`)
        })