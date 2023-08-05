require("dotenv").config();
const express = require('express');
const app = express();
const dbConnect = require('./config/dbConnect')
//const morgan = require('morgan');

dbConnect();
app.use(express.json());


app.set('view engine', 'ejs');
//app.use(morgan('dev'));
app.use('/', require('./routes/fileRoutes.js'));

app.all('*',(req, res, next)=>{
  res.render('404');
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is running on ${port}`));
