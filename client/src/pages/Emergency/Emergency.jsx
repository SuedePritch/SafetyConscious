import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

function Emergency() {
    const fire = (e) =>{
        e.preventDefault();
        fetch('http://localhost:3002/api/messages', {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify({
            body: `A FIRE has been reported by companyname at the location location. Please log into Safety Conscious to view updates on the situation. `, 
            from: '+18704937503', 
            to: '+12506170145'
        })}).then(res => res.json());}
    const spill = (e) =>{
        e.preventDefault();
        fetch('http://localhost:3002/api/messages', {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify({
            body: `A SPILL has been reported by companyname at the location location. Please log into Safety Conscious to view updates on the situation. `, 
            from: '+18704937503', 
            to: '+12506170145'
        }
        )}).then(res => res.json());}
    const injury = (e) =>{
        e.preventDefault();
        fetch('http://localhost:3002/api/messages', {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify({
            body: `An INJURY has been reported by companyname at the location location. Please log into Safety Conscious to view updates on the situation. `, 
            from: '+18704937503', 
            to: '+12506170145'
        }
        )}).then(res => res.json());}








return (
    <div>
        <Navbar/>
        <button onClick={fire}>FIRE</button>
        <button onClick={spill}>SPILL</button>
        <button onClick={injury}>INJURY</button>
    </div>
)
}

export default Emergency