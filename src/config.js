require('dotenv').config(); // llamamos al archivo de env donde esta el puerto

module.exports = {
    app: {
        port: process.env.PORT ||4000,
    }
}