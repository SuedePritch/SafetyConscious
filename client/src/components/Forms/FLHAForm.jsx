import React,{ useState } from "react";
import { useMutation } from '@apollo/client';
import { FLHA_FORM_SUBMIT } from '../../utils/mutations'

function FLHAForm() {
        // BUILD MUTATION FOR FLHA_SUBMIT
        const [submitFLHA] = useMutation(FLHA_FORM_SUBMIT);
        const [flhaFormData, setFlhaFormData] = useState();
    
        const handleFormSubmit = async (event) => {
            event.preventDefault();
            try {
                const flhaFormResponse = await submitFLHA ({
                    variables: { 
                        jobLocation: flhaFormData.jobLocation
                    },
                });
                console.log(flhaFormResponse)
            } catch (e) {
            console.log(e)
                alert('Submission Failed')
            }
        };
        const handleChange = (event) => {
            console.log(flhaFormData);
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
                    <input placeholder='jobLocation' name= 'jobLocation' type='jobLocation' id='jobLocation' 
                        onChange={handleChange}></input>
                </div>
                <button className="form-field form-field-button signup" type='submit' >Submit </button>
            </form>
    </div>
    </div>
  )
}

export default FLHAForm