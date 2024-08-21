const express = require('express');
const config = require('./config')
const usuarios = require('./modulos/usuarios/rutas')

const app = express();

//Configuracion
app.set('port', config.app.port)

//Rutas
app.use('/api/usuarios',usuarios)

module.exports = app;


