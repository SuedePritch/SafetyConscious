import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import FLHAForm from '../../components/Forms/FLHAForm'

function FLHA() {


  return (
    <>
        <Navbar/>
        <div>
            <h2>Field Level Hazard Assesment</h2>
            <FLHAForm />
        </div>
    </>
  )
}

export default FLHA