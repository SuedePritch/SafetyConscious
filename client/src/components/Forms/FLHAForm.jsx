import React,{ useState } from "react";
import { useMutation } from '@apollo/client';
import FLHA_FORM_SUBMIT from '../../utils/mutations'; 

function FLHAForm() {
        // BUILD MUTATION FOR FLHA_SUBMIT
        const [addUser] = useMutation(FLHA_FORM_SUBMIT);
        const [flhaFormData, setFlhaFormData] = useState();
    
        const handleFormSubmit = async (event) => {
            event.preventDefault();
            try {
                const flhaFormResponse = await addUser ({
                    variables: { 
                        username: flhaFormData.username,
                        email: flhaFormData.email,
                        password: flhaFormData.password
                    },
                });
            } catch (e) {
            console.log(e)
                alert('Submission Failed')
            }
        };
        const handleChange = (event) => {
            const { name, value } = event.target;
            setFlhaFormData({
                ...flhaFormData,
                [name]: value,
            });
    };
  return (
    <div>
        <div className='main-content'>
        <form className='form' onSubmit={handleFormSubmit}>
                <div className='form-field signup'>
                    <input placeholder='Worksite' name= 'worksite' type='worksite' id='worksite' 
                        onChange={handleChange}></input>
                </div>
                <button className="form-field form-field-button signup" type='submit' >Submit </button>
            </form>
    </div>
    </div>
  )
}

export default FLHAForm