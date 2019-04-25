//  'use strict';
//  import routes from './api';

// const Hapi = require('hapi');

// // Create a server with a host and port
// const server = Hapi.server({ 
//     host: 'localhost', 
//     port: 8001
// });

// // Add the route
// server.route(routes);

// // Start the server
// async function start() {

//     try {
//         await server.start();
//     }
//     catch (err) {
//         console.log(err);
//         process.exit(1);
//     }

//     console.log('Server running at:', server.info.uri);
// };

// start();

//==========================================

'use strict';

const http = require('http');
const fs = require('fs');

const express = require('express');
const multer = require('multer');

const Router = express.Router;
const upload = multer({ dest: './tmp/sample' });
const app = express();
const router = new Router();
var server = http.createServer(app);
//var port = 9000
const csvFilePath='./sample.csv'
const csv=require('csvtojson')


// Task1
// Modify the Api endpoint /hello to accept an optional query such that

// if /hello is queried, response is Hello, World
// if /hello?name=harish is queried, response is Hello, Harish

//Included the response time logging task in this as well.

app.get('/hello', function (req, res) {
  var start = new Date();
 if(req.query.name){
  res.send('Hello ' +req.query.name);
  
  console.log('method=get, path=/hello, responseTimeMs= '+(new Date() - start)+ 'ms'+', statusCode=200')
 }
 else
 res.send('Hello, World'); 
 console.log('method=get, path=/hello, responseTimeMs= '+(new Date() - start)+ 'ms'+', statusCode=200')
 
})




//TASK2 - To read a csv file and send the JSON response
app.get('/csv2json', function (req, res) {
  var start = new Date();
    csv().fromFile(csvFilePath)
    .then((jsonObj)=>{
        console.log(jsonObj);

        res.json(jsonObj)

        console.log('method=get, path=/csv2json, responseTimeMs= '+(new Date() - start)+ 'ms'+', statusCode=200')
})
})



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
