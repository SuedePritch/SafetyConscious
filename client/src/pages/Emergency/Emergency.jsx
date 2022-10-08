import React from 'react'

function Emergency() {
    const messagesdetails = {
        body: 'Hi there', 
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
            .then(res => res.json())
            .then(data => {
            // if (data.success) {
            //     this.setState({
            //     error: false,
            //     submitting: false,
            //     message: {
            //         to: '',
            //         body: ''
            //     }
            //     });
            // } else {
            //     this.setState({
            //     error: true,
            //     submitting: false
            //     });
            // }
            });
        }
return (
    <div>
        <button onClick={onSubmit}>EMERGENCY</button>
    </div>
)
}

export default Emergency