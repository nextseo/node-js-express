const express = require('express');
const debug = require('debug');
const morgan = require('morgan');

const app = express();
const port =  3000;

app.use(morgan('combined'));

app.get('/', (req,res,next)=> {
    res.send('Hello World');
})

app.listen(port , ()=>{
    debug('SERVER ON PORT '+ port);
})