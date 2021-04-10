const { Twilio } = require('twilio');
const twillo = require('twilio');
require('dotenv').config();

const accountSID = process.env.accountSID;
const authToken = process.env.authToken;

const client = new Twilio(accountSID, authToken);

client.messages.create({
  body: 'Hello dr, whats going on right here',
  from: '+12073707943',
  to: '+2348039482846'
}).then(message => console.log(message.sid))
  .catch(error => console.log(error))

