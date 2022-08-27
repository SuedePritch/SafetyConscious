import React from 'react'

function JobTask() {
  const handleChangeOnJobTask =() =>{
    console.log('yeah');
  }
  return (
    <>
      <div className='form-field task'><input placeholder='Task' name= 'task' type='task' id='task' onChange={handleChangeOnJobTask}></input></div>
      <div className='form-field hazard'><input placeholder='Hazard' name= 'hazard' type='hazard' id='hazard' onChange={handleChangeOnJobTask}></input></div>
      <div className='form-field control'><input placeholder='Controls' name= 'control' type='control' id='control' onChange={handleChangeOnJobTask}></input></div>
    </>
  )
}

export default JobTask