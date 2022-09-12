import React from 'react'
import './NewFlhas.scss'
import { useQuery, useMutation} from '@apollo/client';
import {GET_FLHAS} from '../../utils/queries';
import { APPROVE_FLHA } from '../../utils/mutations';

import Navbar from '../../components/Navbar/Navbar';
function NewFlhas() {
    const [approve] = useMutation(APPROVE_FLHA)
    const handleApproveFLHA = async (event) =>{
        event.preventDefault()
        const flhaID = event.target.dataset.flhaid
        try{
            await approve({
                variables: {id: flhaID , isApproved: true}
            })
        }catch(e){
            alert('Approve Failed')
        }
    }




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
            
            if(!flha.isApproved){
        return <div className="single-flha" key={flha._id}>
                    <div className='flha-details'>
                        <p><u>{flha.user.username}</u></p>
                        <p>Location: {flha.jobLocation}</p>
                        <p>Supervisor: {flha.supervisor}</p>
                        <p>Job Task: {flha.primarytask}</p>
                    </div>
                        <div className='flha-buttons'>
                            <button>Edit</button>
                            <button data-flhaid={flha._id} onClick={handleApproveFLHA}>Good</button>
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