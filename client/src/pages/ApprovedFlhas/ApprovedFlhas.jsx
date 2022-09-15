import React from 'react'

import { useQuery} from '@apollo/client';
import {GET_FLHAS} from '../../utils/queries';

import './ApprovedFlhas.scss'
import Navbar from '../../components/Navbar/Navbar';


function ApprovedFlhas() {
    let flhas;
    const { loading, error, data } = useQuery(GET_FLHAS, {pollInterval: 500});
    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`;
    if(!loading && !error){
    flhas = data.allFLHAs
    }
    return(
        <div>
            <Navbar/>
        {flhas.map((flha) => {
        return <div className="single-flha-approved" key={flha._id}>
                    <div className='flha-details-approved'>
                        <p className='user-approved'><u>{flha.user.username}</u></p>
                        <p>Location: {flha.jobLocation}</p>
                        <p>Supervisor: {flha.supervisor}</p>
                        <p>Job Task: {flha.primarytask}</p>
                        <p className='date-created-approved'>Date Created: {new Intl.DateTimeFormat("en-GB", {
                                        year: "numeric",
                                        month: "short",
                                        day: "2-digit"
                                    }).format(flha.dateCreated)}</p>
                    </div>
            </div>

        })} 
        </div>
  )
}

export default ApprovedFlhas