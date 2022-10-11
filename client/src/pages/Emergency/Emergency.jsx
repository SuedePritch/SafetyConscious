import React from 'react'
import { Link } from 'react-router-dom'
import '../Emergency/Emergency.scss'
import Navbar from '../../components/Navbar/Navbar'
import BigButton from '../../components/Buttons/BigButton'

function Emergency() {
    
return (
    <div>
        <Navbar/>
        <div className="emergencybuttons">
            <Link to='/emergency/fire'><BigButton title="Fire"/></Link>
            <Link to='/emergency/spill'><BigButton title="Spill"/></Link>
            <Link to='/emergency/injury'><BigButton title="Injury"/></Link>
        </div>
    </div>
)
}

export default Emergency