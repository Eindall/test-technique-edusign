const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/attendance-sheet', (_req, res) => {
  fs.readFile('./back/db.json', "utf8", async (_err, jsonString) => {
    const test =  (await JSON.parse(jsonString))?.attendanceSheet?.STUDENTS;
    console.log(test);
    res.send(test);
  });
});

app.put('/student/sign', (req, res) => {
  console.log(req);
  // TODO : Upsert signature url, and set student as Present
});

app.put('/student/setAbs', (req, res) => {
  console.log(req.body);
  // TODO : Set student as absent
})

app.listen(3000, () => {
  console.log('Bonsoir le début');
});
