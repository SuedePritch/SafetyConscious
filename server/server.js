const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth')
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const cors = require('cors')
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3002;


let url;
if(process.env.ENVIRONMENT = 'development'){
  url = process.env.DEVELOPMENT_URL
}else if(process.env.ENVIROMENT = 'production'){
  url = process.env.PRODUCTION_URL
}


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())

// if we're in production, serve client/build as static assets
if (process.env.ENVIRONMENT === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  // app.get('/', (req, res) => {  res.sendFile(path.join(__dirname, '../client/build/index.html'));});
  // app.get('/*', (req, res) => {  res.sendFile(path.join(__dirname, '../client/build/index.html'));})
}
app.post('/api/messages', (req, res) => {

  res.header('Content-Type', 'application/json');
// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token in Account Info
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
client.messages 
    .create(req.body
      // {body: 'Hi there', from: '+18704937503', to: '+12506170145'}
      )
    .then(message => console.log(message.sid));
})


const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at ${url}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);
