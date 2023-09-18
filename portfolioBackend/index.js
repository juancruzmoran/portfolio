const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

const port = process.env.PORT || 4000;

const about = require('./JSON/About.json');
const portfolio = require('./JSON/Portfolio.json');
const mainController = require('../portfolioBackend/src/routes/home');

// MOTOR DE PLANTILLAS NO TOCAR !! 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));


app.use(express.static(path.join(__dirname, 'public')));
app.use('/', mainController);


app.get('/about', (req,res) => {
    res.json(about)
})
app.get('/portfolio', (req,res) => {
    res.json(portfolio)
})

app.listen(port,() => {
    console.log(`Server on port : http://localhost:${port}`)
})
