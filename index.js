'use strict';

const clientsModel = require('./schema.js');
const uuid = require('uuid').v4;

exports.handler = async (event) => {
  console.log('EVENT', event)
  try {
    let body = JSON.parse(event.body);
    const id = uuid();
    const { name, phone } = body;
    
    const record = new clientsModel({ id, name, phone })
    const data = await record.save();
    const savedRecord = JSON.stringify(data)
    return {
      statusCode: 201,
      body: savedRecord
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: e.message
    }
  }
}