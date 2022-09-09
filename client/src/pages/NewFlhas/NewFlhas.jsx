import React from 'react'
import './NewFlhas.scss'
import { useQuery} from '@apollo/client';
import {GET_FLHAS} from '../../utils/queries';

import Navbar from '../../components/Navbar/Navbar';
function NewFlhas() {
    let flhas;
    const { loading, error, data } = useQuery(GET_FLHAS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    if(!loading && !error){
    flhas = data.allFLHAs
    }
    return(
        <div>
            <Navbar/>
        {flhas.map((flha) => {
            // If created within the last 24 hours (86400000 miliseconds)
            if(Date.now() - flha.dateCreated < 86400000){
        return <div className="single-flha" key={flha._id}>
                    <div className='flha-details'>
                        <p>Location: {flha.jobLocation}</p>
                        <p>Supervisor: {flha.supervisor}</p>
                        <p>Job Task: {flha.primarytask}</p>
                    </div>
                        <div className='flha-buttons'>
                            <button>Edit</button>
                            <button>Good</button>
                        </div>
                    {flha.jobTask.map((task)=>{
                    
                            return  <div className='job-task' key={task._id}>
                                    <p><b>Task:</b> {task.task}</p>
                                    <p><b>Hazard:</b> {task.hazard}</p>
                                    <p><b>Control:</b> {task.control}</p>
                                </div>
                    })}
            </div>
            }else{return <div key={Math.random()}></div>}

        })} 
        </div>
    )
}

export default NewFlhas