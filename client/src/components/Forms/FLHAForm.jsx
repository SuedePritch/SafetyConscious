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
                await submitFLHA ({
                    variables: { 
                        jobLocation: flhaFormData.jobLocation,
                        supervisor: flhaFormData.supervisor,
                        primarytask: flhaFormData.primarytask
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
        <h3>Field Level Hazard Assesment</h3>
        <form className='form' onSubmit={handleFormSubmit}>
                <div className='form-field jobLocation'><input placeholder='Worksite' name= 'jobLocation' type='jobLocation' id='jobLocation' onChange={handleChange}></input></div>
                <div className='form-field supervisor'><input placeholder='Supervisor' name= 'supervisor' type='supervisor' id='supervisor' onChange={handleChange}></input></div>
                <div className='form-field primarytask'><input placeholder='Primary Task' name= 'primarytask' type='primarytask' id='primarytask' onChange={handleChange}></input></div>
                
                
                
                
                
                
                <button className="form-field form-field-button flha-submit" type='submit' >Submit </button>
            </form>
    </div>
    </div>
  )
}

export default FLHAForm