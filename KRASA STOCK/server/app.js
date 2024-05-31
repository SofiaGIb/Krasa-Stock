require ('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const router = require ("./routes/index.js")

const server = express();


server.name = 'API';
server.use(express.urlencoded({ extended: true }));
server.use(express.json())
server.use(bodyParser.urlencoded({ extended: true }));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json())
server.use(cookieParser());
server.use(morgan('dev'));

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://krasa-stock.vercel.app'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE,PATCH');
  next();
});

// res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // update to match the domain you will make the request from
server.use( "/", router);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
