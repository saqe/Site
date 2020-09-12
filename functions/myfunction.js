'use strict'

var MongoClient = require('mongodb').MongoClient;



exports.handler = (event, context, callback) => {
  console.log('Calling MongoDB Atlas from AWS Lambda with event: ' + JSON.stringify(event));
  MongoClient.connect(process.env['MONGODB_URI'], function(err, db) {
    if (err) throw err;
    // var dbo = db.db("mydb");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    callback(null, {
      statusCode: 200,
      body: 'No worries, all is working fine!'
    })
  });
}
