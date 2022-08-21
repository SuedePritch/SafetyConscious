
import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth.js';
import './Form.scss'

function LoginForm() {
    // BUILD MUTATION FOR LOGIN_USER
    const [login] = useMutation(LOGIN_USER);
    const [userFormData, setUserFormData] = useState({ email: '', password: ''});

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const userMutationResponse = await login ({
                variables: { email: userFormData.email, password: userFormData.password},
            });
            const token = userMutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            alert('Login Failed');
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({
            ...userFormData,
            [name]: value,
        });
    };
return (
    <div className='main-content'>
        <form className='form' onSubmit={handleFormSubmit}>
                <div className='form-field login'>
                    <input placeholder='Email' name= 'email' type='email' id='email' 
                        onChange={handleChange}></input>
                </div>
                <div className='form-field login'>
                    <input placeholder='Password' name='password' type='password' id='password'
                        onChange={handleChange}></input>
                </div>
                <button className='form-field form-field-button login ' type='submit' >Login </button>
            </form>
    </div>
)
}

export default LoginForm