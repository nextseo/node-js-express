const express = require('express');
const debug = require('debug');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port =  4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,'/public/')));

app.set('views','./src/views');
app.set('view engine','ejs');

app.get('/', (req,res,next)=> {
    res.render('index');
})


app.listen(port , ()=>{
    debug('SERVER ON PORT '+ port);
})