import { useMutation } from '@apollo/client';
import React from 'react'
import {CREATE_JOB_TASK} from '../../utils/mutations'
const jobTaskArray=[];
function JobTask({setJobTaskState}) {
  const [createJobTask, { data, loading, error }] = useMutation(CREATE_JOB_TASK)
  const handleChangeOnJobTask = async (event) =>{
    
    
    if( event.target.parentNode.parentNode.children[0].children[0].value &&
        event.target.parentNode.parentNode.children[1].children[0].value &&
        event.target.parentNode.parentNode.children[2].children[0].value ){
          try {
            await createJobTask ({
                variables: { 
                  task: event.target.parentNode.parentNode.children[0].children[0].value, 
                  hazard: event.target.parentNode.parentNode.children[1].children[0].value, 
                  control: event.target.parentNode.parentNode.children[2].children[0].value 
                },
              });
              if(!loading){
                jobTaskArray.push(data.createJobTask._id)
              }
              
            } catch (error) {
              console.log(error)
              alert('Submission Failed')
            }
            // console.log(jobTaskArray)
        }else{
          return
        }
        
        console.log(jobTaskArray)
        setJobTaskState(jobTaskArray)
      }
  return (
    <div className='job-task-container job-task-container-grid' onBlur={handleChangeOnJobTask}>
      <div className='form-field task'><input placeholder='Task' name='task' type='task' id="task" ></input></div>
      <div className='form-field hazard'><input placeholder='Hazard' name='hazard' type='hazard' id='hazard' ></input></div>
      <div className='form-field control'><input placeholder='Controls' name='control' type='control' id='control' ></input></div>
    </div>
  )
}

export default JobTask