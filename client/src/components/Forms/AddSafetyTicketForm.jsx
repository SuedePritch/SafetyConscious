import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_EMPLOYEES } from '../../utils/queries';
import './Form.scss'

function AddSafetyTicketForm() {
    let employees;
        const { loading, error, data } = useQuery(GET_EMPLOYEES);
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        if(!loading && !error){
        employees = data.employees
        }
  return (
    <div className='main-content'>
        <form className="form">
            <div className='form-field addticket'>
                <select name='employee' type='employee' id='employee'
                    // onChange={handleChange}
                    >
                        <option value="null">Select Employee</option>
                        {employees.map((employee)=>{return <option key={employee._id} value={employee._id}>{employee.firstname} {employee.lastname}</option>})}
                    </select>
            </div>
            <div className='form-field addticket'>
                <input type="text" placeholder='Type of Safety Ticket'/>
            </div>
            <div className='form-field addticket'>
                <label htmlFor="expirationdate">Expiration Date</label>
                <input name='expirationdate' type="date"/>
            </div>

        </form>
    </div>
  )
}

export default AddSafetyTicketForm