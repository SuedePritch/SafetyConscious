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
import Employee from './pages/Employees/Employee';
import ApprovedFlhas from './pages/ApprovedFlhas/ApprovedFlhas'
import NewFlha from './pages/NewFlha/NewFlha';
import ReviewFlhas from './pages/ReviewFlhas/ReviewFlhas';
import AddSafetyTicket from './pages/AddSafetyTicket/AddSafetyTicket';
import Emergency from './pages/Emergency/Emergency';
import Company from './pages/Company/Company'
import Fire from './pages/Emergency/Fire/Fire';
import Spill from './pages/Emergency/Spill/Spill';
import Injury from './pages/Emergency/Injury/Injury'


// APOLLO CONFIG
//THIS HTTPLINK NEEDS TO BE UPDATED TO THE DEPLOYED URL 
const httpLink = createHttpLink({uri: 'http://127.0.0.1:3002/graphql',cache: new InMemoryCache(),});
const authLink = setContext((_, { headers }) => {const token = localStorage.getItem('id_token');return {headers: {...headers,authorization: token ? `Bearer ${token}` : '',},}});
const client = new ApolloClient({link: authLink.concat(httpLink),cache: new InMemoryCache(),});

const messageAPIUrl = 'http://localhost:3002/api/messages'

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

          {/* Main directory */}
          
          <Route path='/emergency' element={<Emergency />} />
          <Route path='/addsafetyticket' element={<AddSafetyTicket />} />
          <Route path='/employees' element={<Employee />} />
          <Route path='/approvedFlhas' element={<ApprovedFlhas />} />
          <Route path='/newFlha' element={<NewFlha />} />
          <Route path='/reviewFlhas' element={<ReviewFlhas />} />
          <Route path='/company' element={<Company />} />

          {/* Emergency */}
          <Route path='/emergency/fire' element={<Fire messageAPIUrl={messageAPIUrl}/>} />
          <Route path='/emergency/injury' element={<Injury messageAPIUrl={messageAPIUrl}/>} />
          <Route path='/emergency/spill' element={<Spill messageAPIUrl={messageAPIUrl}/>} />


          {/* Wildcard/404 Routes - Needs to stay at the bottom */}
          <Route path='*'element={<h1 className='display-2'>Wrong page!</h1>}/>
        </Routes>

      </>
    </Router>
    </ApolloProvider>
  );
}


export default App;