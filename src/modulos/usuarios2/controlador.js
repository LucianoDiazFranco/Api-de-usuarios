const TABLA ='usuarios2'
const auth = require('../auth')

module.exports = function (dbTnyectada) {

    let db = dbTnyectada

    if (!db){
        db = require('../../DB/mysql');
    }


    function todos (){
        return db.todos(TABLA)
    }
    function uno (id){
        return db.uno(TABLA, id);
    }
    async function agregar (body){
        const usuario2 ={
            id:body.id,
            nombre:body.nombre,
            activo:body.activo
        }
        const respuesta = await db.agregar(TABLA, usuario2);
        console.log('respeusta',respuesta);
        var insertId = 0;
        if(body.id == 0){
            insertId = respuesta.insertId;
        }else{
            insertId = body.id;
        }
        
        var respuesta2 = '';
        if(body.usuario2 || body.pasword){
            respuesta2 = await auth.agregar({
                id:insertId,
                usuario:body.usuario,
                pasword:body.pasword
            })
        }

        return respuesta2;
    }
    function eliminar (body){
        return db.eliminar(TABLA, body);
    }

    return{
        todos,
        uno,
        agregar,
        eliminar
    } 
}