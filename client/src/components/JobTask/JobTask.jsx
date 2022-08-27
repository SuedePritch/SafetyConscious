import React, {useState} from 'react'

function JobTask() {
  const [listOfJobTasks, setListOfJobTasks] = useState({ });
  // console.log(typeof listOfJobTasks)
  // console.log(typeof setListOfJobTasks)
  const handleChangeOnJobTask =(event) =>{
    if(event.target.name === 'task'){
      console.log(event.target.value)
      setListOfJobTasks({
        task: event.target.value,
        hazard: listOfJobTasks.hazard,
        control: listOfJobTasks.control
      })
      
    }
    if(event.target.name === 'hazard'){
      console.log(event.target.value)
      setListOfJobTasks({
        task: listOfJobTasks.task,
        hazard: event.target.value,
        control: listOfJobTasks.control
      })
    }
    if(event.target.name === 'control'){
      console.log(event.target.value)
      setListOfJobTasks({
        task: listOfJobTasks.task,
        hazard: listOfJobTasks.hazard,
        control: event.target.value
      })
    }
    console.log(listOfJobTasks);
  }
  return (
    <>
      <div className='form-field task'><input placeholder='Task' name='task' type='task' id='task' onChange={handleChangeOnJobTask}></input></div>
      <div className='form-field hazard'><input placeholder='Hazard' name='hazard' type='hazard' id='hazard' onChange={handleChangeOnJobTask}></input></div>
      <div className='form-field control'><input placeholder='Controls' name='control' type='control' id='control' onChange={handleChangeOnJobTask}></input></div>
    </>
  )
}

export default JobTask