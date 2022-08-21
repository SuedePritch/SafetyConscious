import React,{ useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
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
            <h3>Safety Conscious</h3>
            {loggedIn ?  <li onClick={signout}>Log Out</li>
    :
        <>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        </>
}
        </div>
    </div>
)
}

export default Navbar