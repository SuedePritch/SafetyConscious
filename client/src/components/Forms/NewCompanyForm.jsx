import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import {ADD_COMPANY } from '../../utils/mutations';
import './Form.scss'

function NewCompanyForm() {
     // BUILD MUTATION FOR LOGIN_USER
    const [login] = useMutation(ADD_COMPANY);
    const [companyFormData, setCompanyFormData] = useState({ company: ''});
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await login ({
                variables: { company: companyFormData.company},
            });
            
        } catch (e) {
            alert('Add Company Failed');
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCompanyFormData({
            ...companyFormData,
            [name]: value,
        });
    };
return (
    <div>
        <div className='main-content'>
        <form className='form' onSubmit={handleFormSubmit}>
                <div className='form-field login'>
                    <input placeholder='company' name= 'company' type='company' id='company' 
                        onChange={handleChange}></input>
                </div>
                <button className='form-field form-field-button login ' type='submit' >Add Company</button>
            </form>
    </div>
    </div>
  )
}

export default NewCompanyForm