const express = require('express');
const routes = require('./routes/index.js')
const cookieParser = require ('cookie-parser');
const morgan = require('morgan')
const server = express();
server.name = 'API';

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use(routes);


server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

const PORT = process.env.PORT || 3001;
server.listen(PORT,()=>{ console.log(`servidor ${server.name } escuchando el puerto ${PORT}`);})
module.exports = server 