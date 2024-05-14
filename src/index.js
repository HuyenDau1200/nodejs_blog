const path = require('path');
const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');

const app = express();
const port = 3000;

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

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
  res.render('home');
});

app.get('/search', (req, res) => {
  res.render('search');
});

app.post('/search', (req, res) => {
  console.log(req.body);
  res.send('');
});

//127.0.0.1 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})