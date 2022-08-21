import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ApolloClient,InMemoryCache,ApolloProvider,createHttpLink,} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


// Styling Imports
import './App.css'

// Component Imports
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Main from './pages/Main/Main';

// APOLLO CONFIG
//THIS HTTPLINK NEEDS TO BE UPDATED TO THE DEPLOYED URL 
const httpLink = createHttpLink({uri: 'http://127.0.0.1:3002/graphql',cache: new InMemoryCache(),});
const authLink = setContext((_, { headers }) => {const token = localStorage.getItem('id_token');return {headers: {...headers,authorization: token ? `Bearer ${token}` : '',},}});
const client = new ApolloClient({link: authLink.concat(httpLink),cache: new InMemoryCache(),});



function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <>
        
        <Routes>
          {/* Auth Routes */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

          {/* Main Landing Page */}
          <Route path='/' element={<Main />} />

          {/* Wildcard/404 Routes - Needs to stay at the bottom */}
          <Route path='*'element={<h1 className='display-2'>Wrong page!</h1>}/>
        </Routes>

      </>
    </Router>
    </ApolloProvider>
  );
}


export default App;