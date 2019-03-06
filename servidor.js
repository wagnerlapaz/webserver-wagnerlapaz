const express = require('express');
var app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));


//express hbs
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


//app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {

    res.render('home', {
        usuario: 'WAGNER LA PAZ'
    });

});


app.get('/acercade', (req, res) => {

    res.render('acercade', {
        //anio: new Date().getFullYear()
    });

});

app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`);
});