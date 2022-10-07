// Download the helper library from https://www.twilio.com/docs/node/install
 // Find your Account SID and Auth Token in Account Info
 // and set the environment variables. See http://twil.io/secure
require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
client.messages 
    .create({body: 'Hi there', from: '+18704937503', to: '+12506170145'})
    .then(message => console.log(message.sid));
                    