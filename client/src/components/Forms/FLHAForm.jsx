import React,{ useState } from "react";
import { useMutation } from '@apollo/client';
import { FLHA_FORM_SUBMIT } from '../../utils/mutations'
import JobTask from '../JobTask/JobTask'


function FLHAForm() {
const [submitFLHA] = useMutation(FLHA_FORM_SUBMIT);
const [flhaFormData, setFlhaFormData] = useState();
const [numberOfJobTasks, setNumberOfJobTasks] = useState([]);


//This takes the values from the inputs and updates the FlhaForm State
const handleChange = (event) => {
    const { name, value } = event.target;
    setFlhaFormData({
        ...flhaFormData,
        [name]: value,
    });
};
//This is triggered when the submit button is pressed
//prevents form clearing
//calls submitFLHA mutation and grabs the values from the state
//error message alert if error
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
//This adds a new div that contains the fields for a new job task
const handleAddJobTask = () =>{
        setNumberOfJobTasks(numberOfJobTasks.concat(<JobTask key={numberOfJobTasks.length} />));
}


return (
    <div>
        <div className='main-content'>
        <h3>Field Level Hazard Assesment</h3>
        <form className='form' onSubmit={handleFormSubmit}>
                <div className='form-field jobLocation'><input placeholder='Worksite' name= 'jobLocation' type='jobLocation' id='jobLocation' onChange={handleChange}></input></div>
                <div className='form-field supervisor'><input placeholder='Supervisor' name= 'supervisor' type='supervisor' id='supervisor' onChange={handleChange}></input></div>
                <div className='form-field primarytask'><input placeholder='Primary Task' name= 'primarytask' type='primarytask' id='primarytask' onChange={handleChange}></input></div>
                {numberOfJobTasks}
                <button type="button" onClick={handleAddJobTask}>+</button>
                
                
                
                
                
                <button className="form-field form-field-button flha-submit" type='submit' >Submit </button>
            </form>
    </div>
    </div>
    )
}

export default FLHAForm