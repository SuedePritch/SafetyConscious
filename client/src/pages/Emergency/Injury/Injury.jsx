import React from 'react'

function Injury(props) {
  const injury = (e) =>{
    e.preventDefault();
    fetch(props.url, {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify({
        body: `An INJURY has been reported by companyname at the location location. Please log into Safety Conscious to view updates on the situation. `, 
        from: '+18704937503', 
        to: '+12506170145'
    }
    )}).then(res => res.json());}
  return (
    <div><button onClick={injury}>INJURY</button></div>
  )
}

export default Injury