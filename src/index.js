const express = require("express");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");


const bodyParser = require('body-parser');

const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
  
const myMiddleware = require('./middleware/corsMiddleware');

const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({ records: [] }).write(); 
app.use(express.json());


app.use(myMiddleware);

app.get("/api/records", (req, res) => {
  const newRecord = req.body;
  const records = db.get("records").value();
  res.json(records);
});

app.post("/api/records", (req, res) => {
  const newRecord = req.body;
  console.log(newRecord);
  db.get("records").push(newRecord).write();
  res.json(newRecord);
  //res.status(201).send('Record added');
    
});

const users = require('./routes/users.js');
const order = require('./routes/orders.js');
const record = require('./routes/records.js');

app.use('/users', users);
app.use('/orders', order);
app.use('/records', record);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });




// git commit -m " bebebe-jsjjs "
