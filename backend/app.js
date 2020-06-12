const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const db = require('./db');


app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });



app.get('/agents/getAgents', (req, res) => {
  db.getAgents(function(results) {
    const agentJson = JSON.parse(JSON.stringify(results));
    res.status(200).json({message: "Success", agents: agentJson})
  })
})

app.get('/maps/getMaps', (req, res) => {
  db.getMaps(function(results) {
    const mapJson = JSON.parse(JSON.stringify(results));
    res.status(200).json({message: "Success", maps: mapJson});
  })
})






module.exports = app;