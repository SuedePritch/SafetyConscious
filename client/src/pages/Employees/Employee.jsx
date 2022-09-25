import React from 'react'

import { useQuery} from '@apollo/client';
import {GET_EMPLOYEES} from '../../utils/queries';
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
    <div className="approved-flha-container">
            {employees.map((employee) => {
            return <div key={employee._id}>
                        <div>
                            <p >{employee.firstname} {employee.lastname}</p>
                            
                        </div>
                </div>
            })}
        </div>
  )
}

export default Employee