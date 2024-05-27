import express from "express";
import * as utils from './utils/utils.js';

const app = express();

app.get('/', function (req, res) {
    const greeting = utils.greeting("RunMotion"); 
  res.send(greeting);
});app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

