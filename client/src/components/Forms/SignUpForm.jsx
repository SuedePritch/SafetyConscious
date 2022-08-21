import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth.js';
import './Form.scss'

function SignUpForm() {
    // BUILD MUTATION FOR LOGIN_USER
    const [addUser] = useMutation(ADD_USER);
    const [signupFormData, setSignupFormData] = useState({ email: '', password: ''});

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const userMutationResponse = await addUser ({
                variables: { username: signupFormData.username, email: signupFormData.email, password: signupFormData.password},
            });
            const token = userMutationResponse.data.addUser.token;
            Auth.login(token);
        } catch (e) {
        console.log(e)
            alert('Email or Username already taken')
        }
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setSignupFormData({
            ...signupFormData,
            [name]: value,
        });
};
return (
    <div className='main-content'>
        <form className='form' onSubmit={handleFormSubmit}>
                <div className='form-field signup'>
                    <input placeholder='Username' name= 'username' type='username' id='username' 
                        onChange={handleChange}></input>
                </div>
                <div className='form-field signup'>
                    <input placeholder='Email' name= 'email' type='email' id='email' 
                        onChange={handleChange}></input>
                </div>
                <div className='form-field signup'>
                    <input placeholder='Password' name='password' type='password' id='password'
                        onChange={handleChange}></input>
                </div>
                <button className="form-field form-field-button signup" type='submit' >Signup </button>
            </form>
    </div>
)
}

export default SignUpForm