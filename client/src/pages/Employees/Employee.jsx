import React from 'react'

import { useQuery} from '@apollo/client';
import {FLHA_BY_USER, GET_EMPLOYEES} from '../../utils/queries';

import Navbar from '../../components/Navbar/Navbar'

import './Employee.scss'


function Employee() {
    //warning time changes the color of the safety tickets to provide visual notice of upcomming ticket expirations
    //set to 3 month timeframe to give a warning to suggest booking a safety course
    const warningTime=  new Date().setMonth(new Date().getMonth() + 3);
    const lastDay = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
    let employees;
    let flhaByUser;
    const flhaCreatedInLast24Hours= []
    const employeeQuery = useQuery(GET_EMPLOYEES)
    const flhaQuery = useQuery(FLHA_BY_USER);
    const errors = employeeQuery.error || flhaQuery.error
    const loading = employeeQuery.loading || flhaQuery.loading
    if (loading) return 'Loading...'
    if (errors) return `Error! ${errors.message}`;
    if(!loading && !errors){
    employees = employeeQuery.data.employees
    flhaByUser = flhaQuery.data.flhasByUser
    flhaByUser.forEach((flha) => {
        if(flha.dateCreated >= lastDay){
            flhaCreatedInLast24Hours.push(flha.user._id)
        };
    });
    }


return (
    <div>
        <Navbar/>
        <div className='employee-container'>
                {employees.map((employee) => {
                return <div className={`employee ${
                    flhaCreatedInLast24Hours.includes(employee._id)? 'complete'
                    :'missing'}`}  key={employee._id}>
                            <div>
                                <h3>{employee.firstname} {employee.lastname}</h3>
                                {employee.safetytickets.length > 0 ? 
                                employee.safetytickets.map((safetyticket)=>{
                                    return <div className={`ticket ${
                                        safetyticket.expirationDate < Date.now()? 'expired':
                                        safetyticket.expirationDate < warningTime ? 'warning'
                                        :'current'}`} key={safetyticket._id}>

                                                <p>{safetyticket.ticket}</p>
                                                {/* <p>{new Intl.DateTimeFormat("en-GB", {
                                                        year:"2-digit",
                                                        month: "short",
                                                        day: "2-digit"
                                                        }).format(safetyticket.expirationDate)}</p> */}
                                            </div>
                                }
                                )
                                : 
                                <br />}
                            </div>
                    </div>
                })}
            </div>
    </div>
)
}

export default Employee