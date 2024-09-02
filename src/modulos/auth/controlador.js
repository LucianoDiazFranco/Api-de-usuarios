const TABLA ='auth'
const bcrypt = require('bcrypt')
const auth = require('../../auth')
module.exports = function (dbTnyectada) {

    let db = dbTnyectada

    if (!db){
        db = require('../../DB/mysql');
    }

    async function login(usuario, pasword){
        const data = await db.query(TABLA, {usuario : usuario});

        if (!data || !data.pasword) {
            // Verifica si 'data' es undefined o si no tiene la propiedad 'pasword'
            throw new Error('Usuario no encontrado o sin contraseña');
        }

        return bcrypt.compare(pasword, data.pasword)
            .then(resultado =>{
                if(resultado === true){
                    //generar un Token
                    return auth.asignarToken({ ...data})
                }else{
                    throw new Error('Informacion Invalida');
                }
            })
    }

    async function agregar (data){

        const authData = {
            id: data.id,
        }

        if(data.usuario){
            authData.usuario = data.usuario 
        }
        if(data.pasword){
            authData.pasword =await bcrypt.hash(data.pasword.toString(), 5);
        }

        return db.agregar(TABLA, authData);
    }

    return{
        login,
        agregar
    } 
}