'use strict'

var MongoClient = require('mongodb').MongoClient;

exports.handler = (event, context, callback) => {
  console.log('Calling MongoDB Atlas from AWS Lambda with event: ' + JSON.stringify(event));
  
  callback(null, {
    statusCode: 200,
    body: 'No worries, all is working fine!'
  })
}
