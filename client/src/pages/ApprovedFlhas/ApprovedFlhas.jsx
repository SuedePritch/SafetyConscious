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
        <div className="approved-flha-container">
            {flhas.map((flha) => { 
                if(flha.isApproved){
            return <div className="single-flha-approved" key={flha._id}>
                        <div className='flha-details-approved'>
                            <p className='user-approved'>{flha.user.firstname} {flha.user.lastname}</p>
                            <p>{flha.supervisor}</p>
                            <p>{flha.jobLocation}</p>
                            <p className='date-created-approved'>{new Intl.DateTimeFormat("en-GB", {
                                year:"2-digit",
                                month: "short",
                                day: "2-digit"
                                }).format(flha.dateCreated)}</p>
                        </div>
                </div>
            }else{return <div key={Math.random()}></div>}
            })}
        </div>
        </div>
  )
}

export default ApprovedFlhas