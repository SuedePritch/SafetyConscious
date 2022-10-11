import React from 'react'
import { Link } from 'react-router-dom'
import '../Emergency/Emergency.scss'
import Navbar from '../../components/Navbar/Navbar'


function Emergency() {
    
return (
    <div>
        <Navbar/>
        <div className="emergencybuttons">
            <Link to='/emergency/fire'>fire</Link>
            <Link to='/emergency/spill'>spill</Link>
            <Link to='/emergency/injury'>injury</Link>
        </div>
    </div>
)
}

export default Emergency