const express = require("express");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const bodyParser = require('body-parser');

const app = express();
const port = 3000;  
  
const myMiddleware = require('./middleware/corsMiddleware');

const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({ records: [] }).write(); 
app.use(express.json());

app.use(myMiddleware);

app.get("/api/records", (req, res) => {
  const records = db.get("records").value();
  res.json(records);
});

app.post("/api/records", (req, res) => {
  const newRecord = req.body;
  db.get("records").push(newRecord).write();
  res.json(newRecord);
    
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });


const read = () => {
    const allRecords = db.get('records').value();
    console.log(allRecords)
};

read();

// git commit -m " bebebe-jsjjs "
