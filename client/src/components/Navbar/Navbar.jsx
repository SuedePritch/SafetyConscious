import React,{ useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import Menu from './Menu/Menu'
import './Navbar.scss'
function Navbar() {
    const [loggedIn, setLoggedIn] = useState(false)
    const token = localStorage.getItem('id_token')
        

        useEffect(() => {
            if(token){
                setLoggedIn(true)
            }else if(!token){
                return
            }
        }, [loggedIn, token])
        


    const signout = () =>{
        localStorage.clear()
        setLoggedIn(false)
    }
return (
    <div>
        <div className="navbar-container">
            <Link to="/"><h2 className='navbar-title'>Safety Conscious</h2></Link>
            {
            loggedIn ?  
            <button className='nav-link' onClick={signout}><Link to="/">Logout</Link></button>
            :
            <div>
            <button className='nav-link'><Link to="/login">Login</Link></button>
            <button className='nav-link'><Link to="/signup">Signup</Link></button>
            </div>
            }   
            <Menu/>
        </div>
    </div>
)
}

export default Navbar