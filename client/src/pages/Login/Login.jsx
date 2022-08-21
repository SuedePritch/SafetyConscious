import React from 'react'


// Component Imports
import Navbar from '../../components/Navbar/Navbar'
import SideNav from '../../components/SideNav/SideNav'
import LoginForm from '../../components/Forms/LoginForm'

function Login() {
  return (
    <>
        <Navbar />
        <SideNav/>
        <LoginForm/>
    </>
  )
}

export default Login