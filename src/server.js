//Aufgabe 01
const express = require('express'); // <<<<<
const app = express(); // <<<<<<<
// muss immer geladen werden. <<<<<<<<

const dotenv = require('dotenv').config(); // <<<<<< // aus der datei .env. konfigurier es.
const PORT = process.env.PORT; // <<<  
// PORT = datei. env .env datei anlegen.

app.use (express.json());
//wird nur bei älteren Versionen von Express benötigt
//const bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({ extended: true }));
const { connect, closeConnection } = require('./configs/db.js');
connect(); // <<< Verbindung zur Datenbank unter dem Folder Configs die Datei db.js.


//Aufgabe 02-Middleware
const meineMiddleware = require('./middleware/corsMiddleware'); 
app.use(meineMiddleware);


//Aufgabe 01(Get und Post) und 03 -Routing
const recordsRouter = require('./routes/recordsRouter');
app.use('/api/records', recordsRouter);

const usersRouter = require('./routes/usersRouter');
app.use('/api/users', usersRouter);

const ordersRouter = require('./routes/ordersRouter');
app.use('/api/orders', ordersRouter);

//Ende Routing


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// app.listen muss immer Hauptdatei dabei sein wie hier in dem Fall server.js datei.

