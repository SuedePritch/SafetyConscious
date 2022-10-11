import React from 'react'

function Fire(props) {
    const fire = (e) =>{
        e.preventDefault();
        fetch(props.messageAPIUrl, {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify({
            body: `A FIRE has been reported by companyname at the location location. Please log into Safety Conscious to view updates on the situation. `, 
            from: '+18704937503', 
            to: '+12506170145'
        })}).then(res => res.json());
    }
  return (
    <div><button onClick={fire}>FIRE</button></div>
  )
}

export default Fire