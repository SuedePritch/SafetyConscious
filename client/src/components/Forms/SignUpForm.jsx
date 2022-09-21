import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { GET_COMPANIES } from '../../utils/queries';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth.js';
import './Form.scss'

function SignUpForm() {
    
    // BUILD MUTATION FOR LOGIN_USER
    const [addUser] = useMutation(ADD_USER);
    const [signupFormData, setSignupFormData] = useState({ email: '', password: ''});
    let companies;
        const { loading, error, data } = useQuery(GET_COMPANIES);
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        if(!loading && !error){
        companies = data.companies
        }
        
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const userMutationResponse = await addUser ({
                variables: { 
                    email: signupFormData.email, 
                    firstname: signupFormData.firstname,
                    lastname: signupFormData.lastname,
                    password: signupFormData.password,
                    company: signupFormData.company
                },
            });
            const token = userMutationResponse.data.addUser.token;
            Auth.login(token);
        } catch (e) {
        console.log(e)
            alert('Email already in use')
        }
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(signupFormData)
        setSignupFormData({
            ...signupFormData,
            [name]: value,
        });

        
};
return (
    <div className='main-content'>
        <form className='form' onSubmit={handleFormSubmit}>
                <div className='form-field signup'>
                    <input placeholder='Email' name= 'email' type='email' id='email' 
                        onChange={handleChange}></input>
                </div>
                <div className='form-field signup'>
                    <select name='company' type='company' id='company' 
                        onChange={handleChange}>
                            <option value="null">Select Your Company</option>
                            {companies.map((companyoptions)=>{
                                return <option key={companyoptions._id} value={companyoptions._id}>{companyoptions.company}</option>

                            })}

                        </select>
                </div>
                <div className='form-field signup'>
                    <input placeholder='First Name' name= 'firstname' type='firstname' id='firstname' 
                        onChange={handleChange}></input>
                </div>
                <div className='form-field signup'>
                    <input placeholder='Last Name' name= 'lastname' type='lastname' id='lastname' 
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