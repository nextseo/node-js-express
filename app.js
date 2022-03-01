const express = require('express');
const productsRouter = require('./src/router/productsRouter');

const app = express();
const PORT =process.env.PORT || 4000;

app.set('views','./src/views');
app.set('view engine', 'ejs');


app.use('/products',productsRouter)

app.get('/', (req,res)=> {
    res.render('index', {username:'testssssss',customer:['naii','beam','nana']})
})





app.listen(PORT, ()=> {
    console.log("SERVER RUN IS : "+PORT);
})