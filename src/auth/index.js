const jwt = require('jsonwebtoken');
const config = require('../config');
const error = require('../middleware/errors')

const secret = config.jwt.secret;

function asignarToken(data){
    return jwt.sign(data, secret);
}

function verificarToken(token){
    return jwt.verify(token, secret);
}

const chequearToken = {
    confirmarToken:  function(req, id){
        const decoficado = decodificarCabecera(req);

        if (decoficado.id !== id){
            throw error("No tiene permisos para hacer esto", 401)
        }

    }
}

function obtenerToken(autorizacion){
    if(!autorizacion){
        throw error('no Viene Token', 401);
    }
    if (autorizacion.indexOf('Bearer') === -1){
        throw error ('Formato Invalido', 401);
    }

    let token = autorizacion.replace('Bearer ', '')
    return token;
}


function decodificarCabecera(req){
    const autorizacion = req.headers.authorization || '';
    const token = obtenerToken(autorizacion);
    const decodificado = verificarToken(token);

    req.user = decodificado;
    return decodificado;
}

module.exports = {
    asignarToken,
    chequearToken
}