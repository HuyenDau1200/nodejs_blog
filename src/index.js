const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000

//morgan http logger
app.use(morgan('combined'))

//template engine
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars');

//route
//run "npm start" to test nodemon --inspect debug on browser
app.get('/', (req, res) => {
  res.send('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})