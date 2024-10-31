//Uso do framework express para lidarmos com as requisicoes HTPP 
const express = require('express'); //Importando Express
const cors = require('cors');
const router = require('./router');

const app = express(); // Criando a instäncia da aplicação Expresss. 

app.use(express.json());
app.use(cors());
app.use(router);

module.exports = app;