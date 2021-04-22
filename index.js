'use strict';

const clientsModel = require('./schema.js');

exports.handler = async (event) => {
  try {
    let body = JSON.parse(event.body);
    const id = uuid();
    const {name, phone} = body;
    console.log('EVENT', event)
    console.log('BODY', body)
    const record = new clientsModel({id, name, phone})
    return {
      statusCode: 200,
      body: data
    }
  } catch (e) {
    return {
      statusCode: 200,
      body: e.message
    }
  }

}