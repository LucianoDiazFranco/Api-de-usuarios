// constructor donde insertemos la base de datos
const db = require('../../DB/mysql')
const ctrl = require('./controlador')

module.exports = ctrl(db);