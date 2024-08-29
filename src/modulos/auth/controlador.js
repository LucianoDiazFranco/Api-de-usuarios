const TABLA ='auth'
const bcrypt = require('bcrypt')

module.exports = function (dbTnyectada) {

    let db = dbTnyectada

    if (!db){
        db = require('../../DB/mysql');
    }

    async function agregar (data){

        const authData = {
            id: data.id,
        }

        if(data.usuario){
            authData.usuario = data.usuario 
        }
        if(data.pasword){
            authData.pasword =await bcrypt.hash(data.pasword.toString(), 7);
        }

        return db.agregar(TABLA, authData);
    }

    return{
        agregar
    } 
}