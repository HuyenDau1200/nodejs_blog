const path = require('path');
const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');

const app = express();
const port = 3000;

//http logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

app.get('/trang-chu', (req, res) => {
    res.render('news');
})

//127.0.0.1 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})