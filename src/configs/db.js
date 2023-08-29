require('dotenv').config();
const mongoose = require('mongoose');

exports.connect = async () =>
{
    try {
        const conn = await mongoose.connect(`${ process.env.DB_URL}${process.env.DB_NAME}`);

        console.log(`MongoDB wurde verbunden auf ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

exports.closeConnection = () => mongoose.closeConnection();

/* const { connect, closeConnection } = require('./configs/db.js'); */ 
 // Von der Datei server.js verbinden mit der Zeile 17 in de Datei server.js
