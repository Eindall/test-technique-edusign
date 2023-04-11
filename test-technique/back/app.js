const express = require('express');
const fs = require('fs');

const database = require('./db.json');

const app = express();

app.get('/attendance-sheet', (req, res) => {
  console.log(req);
  // TODO : Get students list
});

app.put('/student/sign', (req, res) => {
  console.log(req);
  // TODO : Upsert signature url, and set student as Present
});

app.put('/student/setAbs', (req, res) => {
  console.log(req);
  // TODO : Set student as absent
})

app.listen(3000, () => {
  console.log('Bonsoir le début');
});
