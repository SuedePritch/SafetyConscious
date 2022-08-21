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
            <h2>Safety Conscious</h2>
            {loggedIn ?  <button onClick={signout}>Log Out</button>
    :
        <div>
        <button><Link to="/login">Login</Link></button>
        <button><Link to="/signup">Signup</Link></button>
        </div>
}
        </div>
    </div>
)
}

export default Navbar