import React from 'react'

function Emergency() {
    const messagesdetails = {
        body: 'An EMERGENCY has been reported by RFI INDUSTRIES at the THUNDER BAY location. If you are ABLE to respond reply 1, if you are UNABLE to respond reply 2. Please log into Safety Conscious to view updates on the situation. ', 
        from: '+18704937503', 
        to: '+12506170145'
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        fetch('http://localhost:3002/api/messages', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(messagesdetails)
        })
            .then(res => res.json());
        }
return (
    <div>
        <button onClick={onSubmit}>EMERGENCY</button>
    </div>
)
}

export default Emergency