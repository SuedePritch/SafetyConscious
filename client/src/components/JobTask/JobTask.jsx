import React from 'react'

const jobTaskArray=[];
function JobTask() {
  const handleChangeOnJobTask = (event) =>{
    
    
    if( event.target.parentNode.parentNode.children[0].children[0].value &&
        event.target.parentNode.parentNode.children[1].children[0].value &&
        event.target.parentNode.parentNode.children[2].children[0].value ){
          jobTaskArray.push(
          {
            task: event.target.parentNode.parentNode.children[0].children[0].value, 
            hazard: event.target.parentNode.parentNode.children[1].children[0].value, 
            control: event.target.parentNode.parentNode.children[2].children[0].value 
          }
          )
          
        }else{
          return
        }
        console.log(jobTaskArray)
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