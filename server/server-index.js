const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const sampleRoute = require('./route/post-route.js');


const port = 3002;

server.use(bodyParser.urlencoded({limit: '50mb', extended: true})); //body parser for recieving data from client through urlencoded
server.use(bodyParser.json({limit: '50mb'})); //body parser for recieving data from client through json
server.use(cors({origin: 'http://localhost:3000'})) //getting server clients response

server.use('/', sampleRoute);

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});