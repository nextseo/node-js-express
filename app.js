const express = require('express');
const debug = require('debug');
const morgan = require('morgan');

const app = express();
const port =  3000;

app.use(morgan('combined'));

app.set('views','./src/views');
app.set('view engine','ejs');

app.get('/', (req,res,next)=> {
    res.render('index');
})


app.listen(port , ()=>{
    debug('SERVER ON PORT '+ port);
})