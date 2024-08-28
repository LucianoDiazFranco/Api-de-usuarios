const db = require('../../DB/mysql')

const TABLA ='usuarios'

function todos (){
    return db.todos(TABLA)
}

module.exports = {
    todos,
}