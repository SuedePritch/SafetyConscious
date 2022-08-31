import React,{ useState } from "react";
import { useMutation } from '@apollo/client';
import { FLHA_FORM_SUBMIT, CREATE_JOB_TASK} from '../../utils/mutations'
// import JobTask from '../JobTask/JobTask'

const jobTaskArray=[];
const jobTaskIdArray=[];
function FLHAForm() {
const [submitFLHA] = useMutation(FLHA_FORM_SUBMIT);
const [createJobTask, { loading, error, data }] = useMutation(CREATE_JOB_TASK)
const [flhaFormData, setFlhaFormData] = useState();
const [jobTaskState, setJobTaskState] = useState();


const handleChangeOnJobTask = async (event)=>{
    if( event.target.parentNode.parentNode.children[0].children[0].value &&
        event.target.parentNode.parentNode.children[1].children[0].value &&
        event.target.parentNode.parentNode.children[2].children[0].value ){
                const jobTaskIndex = event.target.parentNode.parentNode.id;
                const jobTaskData = {
                task: event.target.parentNode.parentNode.children[0].children[0].value,
                hazard:event.target.parentNode.parentNode.children[1].children[0].value,
                control: event.target.parentNode.parentNode.children[2].children[0].value
                }
            jobTaskArray.splice(jobTaskIndex,1,jobTaskData)
        }
        
    

}





    const [numberOfJobTasks, setNumberOfJobTasks] = useState([
        <div className='job-task-container job-task-container-grid' key={0} id="0" >
            <div className='form-field task'><input placeholder='Task' name='task' type='task' id="task" onChange={handleChangeOnJobTask}></input></div>
            <div className='form-field hazard'><input placeholder='Hazard' name='hazard' type='hazard' id='hazard' onChange={handleChangeOnJobTask}></input></div>
            <div className='form-field control'><input placeholder='Controls' name='control' type='control' id='control' onChange={handleChangeOnJobTask}></input></div>
        </div>,

        <div className='job-task-container job-task-container-grid'  key={1} id="1">
            <div className='form-field task'><input placeholder='Task' name='task' type='task' id="task" onChange={handleChangeOnJobTask}></input></div>
            <div className='form-field hazard'><input placeholder='Hazard' name='hazard' type='hazard' id='hazard' onChange={handleChangeOnJobTask}></input></div>
            <div className='form-field control'><input placeholder='Controls' name='control' type='control' id='control' onChange={handleChangeOnJobTask}></input></div>
        </div>,

        <div className='job-task-container job-task-container-grid'  key={2} id="2">
            <div className='form-field task'><input placeholder='Task' name='task' type='task' id="task" onChange={handleChangeOnJobTask}></input></div>
            <div className='form-field hazard'><input placeholder='Hazard' name='hazard' type='hazard' id='hazard' onChange={handleChangeOnJobTask}></input></div>
            <div className='form-field control'><input placeholder='Controls' name='control' type='control' id='control' onChange={handleChangeOnJobTask}></input></div>
        </div>
    ]);






//This takes the values from the inputs and updates the FlhaForm State
const handleChange = (event) => {
    const { name, value } = event.target;
    setFlhaFormData({
        ...flhaFormData,
        [name]: value,
    });
};

const createJobTaskHelper = async () =>{
    console.log(jobTaskArray, "createJobTaskHelper");
    for (let i = 0; i < jobTaskArray.length; i++) {
        const jobTaskDataFromArray = jobTaskArray[i];
        if(jobTaskDataFromArray){
            try {
            await createJobTask ({
                variables: { 
                    task: jobTaskDataFromArray.task, 
                    hazard: jobTaskDataFromArray.hazard, 
                    control:jobTaskDataFromArray.control 
                }
            });
            if(!loading && !error && data){
                jobTaskIdArray.push(data.createJobTask._id)
                setJobTaskState(jobTaskIdArray)
                }
        } catch (error) {
            console.log(error)
        }}
    }
    console.log(jobTaskState);
}
//This is triggered when the submit button is pressed
//prevents form clearing
//calls submitFLHA mutation and grabs the values from the state
//error message alert if error
const handleFormSubmit = async (event) => {
    event.preventDefault();
    await createJobTaskHelper();

    









    // try {
    //     await submitFLHA ({
    //         variables: { 
    //             jobLocation: flhaFormData.jobLocation,
    //             supervisor: flhaFormData.supervisor,
    //             primarytask: flhaFormData.primarytask,
    //             jobTask: jobTaskIdArray
    //         },
    //     });
    // } catch (e) {
    // console.log(e)
    //     alert('Submission Failed')
    // }
};
//This adds a new div that contains the fields for a new job task
const handleAddJobTask = () =>{
    if(numberOfJobTasks.length <= 8){
        setNumberOfJobTasks(numberOfJobTasks.concat(
       <div className='job-task-container job-task-container-grid' key={numberOfJobTasks.length} id={numberOfJobTasks.length}>
        <div className='form-field task'><input placeholder='Task' name='task' type='task' id="task" onChange={handleChangeOnJobTask}></input></div>
        <div className='form-field hazard'><input placeholder='Hazard' name='hazard' type='hazard' id='hazard' onChange={handleChangeOnJobTask}></input></div>
        <div className='form-field control'><input placeholder='Controls' name='control' type='control' id='control' onChange={handleChangeOnJobTask}></input></div>
      </div>
      ));
    }
}


return (
    <div>
        <div className='main-content'>
        <h3>Field Level Hazard Assesment</h3>
        <form className='form'>
                <div className='form-field jobLocation'><input placeholder='Worksite' name= 'jobLocation' type='jobLocation' id='jobLocation' onChange={handleChange}></input></div>
                <div className='form-field supervisor'><input placeholder='Supervisor' name= 'supervisor' type='supervisor' id='supervisor' onChange={handleChange}></input></div>
                <div className='form-field primarytask'><input placeholder='Primary Task' name= 'primarytask' type='primarytask' id='primarytask' onChange={handleChange}></input></div>
                {numberOfJobTasks}
                {numberOfJobTasks.length === 9 ?
                <button type="button" className='add-job-task' disabled>Max Job Tasks</button>:
                <button type="button" className='add-job-task' onClick={handleAddJobTask}>Add Job Task</button>

                }
                
                
                
                
                
                <button className="form-field form-field-button flha-submit" onClick={handleFormSubmit}>Submit</button>
            </form>
    </div>
    </div>
    )
}

export default FLHAForm