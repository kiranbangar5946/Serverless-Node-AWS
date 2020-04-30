'use strict';

module.exports = {
  requestUploadURL: (event, context, callback) => {
    var AWS = require('aws-sdk');
    var s3 = new AWS.S3();
    var params = JSON.parse(event.body);
    var s3Params = {
      Bucket: process.env.BucketName,
      Key: params.name,
      ContentType: params.type,
      ACL: 'public-read',
    };
    var uploadURL = s3.getSignedUrl('putObject', s3Params);
    callback(null, {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ uploadURL: uploadURL }),
    })
  },
  //get method pass params 
  hello: (event, context, callback) => {
        const response = {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: `Thats Perfect ${event.pathParameters.message},You did it!`
        },
        null,
        2
      ),
    };
    callback(null, response)
  },
  //basic cron 
  cron:(event,context,callback)=>{
    const now=new Date()
    const message=`This is my current time:${now}`
    callback(null,message)
  },
  //post method
  addProject: (event, context, callback) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "This is my post method!",
          object: JSON.parse(event.body)
        },
        null,
        2
      ),
    };
    callback(null, response)
  },
  environmentVariables: (event, context, callback) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: `This is Aws Key ${process.env.ACCESS_KEY_ID}`,
        },
        null,
        2
      ),
    };
    callback(null, response)
  }
}