import React from 'react'

import { useQuery} from '@apollo/client';
import {GET_EMPLOYEES} from '../../utils/queries';

import Navbar from '../../components/Navbar/Navbar'

import './Employee.scss'


function Employee() {
    //warning time changes the color of the safety tickets to provide visual notice of upcomming ticket expirations
    //set to 3 month timeframe to give a warning to suggest booking a safety course
    const warningTime=  new Date().setMonth(new Date().getMonth() + 3);
    let employees;
    const { loading, error, data } = useQuery(GET_EMPLOYEES);
    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`;
    if(!loading && !error){
    employees = data.employees
    console.log(Date.now + warningTime)
    }


return (
    <div>
        <Navbar/>
        <div className='employee-container main-content'>
                {employees.map((employee) => {
                return <div className='employee' key={employee._id}>
                            <div>
                                <h3>{employee.firstname} {employee.lastname}</h3>
                                {employee.safetytickets.length > 0 ? 
                                employee.safetytickets.map((safetyticket)=>{
                                    return <div className={`ticket ${
                                        safetyticket.expirationDate < Date.now()? 'expired':
                                        safetyticket.expirationDate < warningTime ? 'warning'
                                        :'current'}`} key={safetyticket._id}>

                                                <p>{safetyticket.ticket}</p>
                                                <p>{new Intl.DateTimeFormat("en-GB", {
                                                        year:"2-digit",
                                                        month: "short",
                                                        day: "2-digit"
                                                        }).format(safetyticket.expirationDate)}</p>
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