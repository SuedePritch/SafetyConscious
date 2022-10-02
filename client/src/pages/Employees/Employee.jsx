import React from 'react'

import { useQuery} from '@apollo/client';
import {GET_EMPLOYEES} from '../../utils/queries';

import Navbar from '../../components/Navbar/Navbar'


function Employee() {
    let employees;
    const { loading, error, data } = useQuery(GET_EMPLOYEES);
    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`;
    if(!loading && !error){
    employees = data.employees
    console.log(employees)
    }


return (
    <div>
        <Navbar/>
        <div>
                {employees.map((employee) => {
                return <div key={employee._id}>
                            <div>
                                <p>{employee.firstname} {employee.lastname}</p>
                                {employee.safetytickets.length > 0 ? 
                                employee.safetytickets.map((safetyticket)=>{
                                    return <div key={safetyticket._id}>
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