require('dotenv').config(); // llamamos al archivo de env donde esta el puerto

module.exports = {
    app: {
        port: process.env.PORT ||4000,
    },
    mysql: {
        host:process.env.MYSQL_HOST || 'localhost',
        user:process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '',
        database: process.env.MYSQL_DB || 'api1'   
    }
}