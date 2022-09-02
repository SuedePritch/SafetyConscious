import React from 'react'
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
            <h2>New FLHAS</h2>
        {flhas.map((flha) => {
            if(Date.now() - flha.dateCreated < 86400000){
        return    <div className="details" key={flha._id}>
                <p>{flha.jobLocation}</p>
                <p>{flha.supervisor}</p>
                <p>{flha.primarytask}</p>
                {flha.jobTask.map((task)=>{
                    //If created within the last 24 hours(86400000 miliseconds) 
                    
                        return  <div key={task._id}>
                                <p>{task.task}</p>
                                <p>{task.hazard}</p>
                                <p>{task.control}</p>
                                <hr />
                            </div>
                })}
            </div>
            }else{return <div key={Math.random()}></div>}

        })} 
        </div>
    )
}

export default NewFlhas