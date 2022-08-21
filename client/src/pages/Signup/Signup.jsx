import React from 'react'


// Component Imports
import Navbar from '../../components/Navbar/Navbar'
import SideNav from '../../components/SideNav/SideNav'
import SignUpForm from '../../components/Forms/SignUpForm'

function SignUp() {
  return (
    <div>
        <Navbar />
        <SideNav/>
        <SignUpForm/>
    </div>
  )
}

export default SignUp