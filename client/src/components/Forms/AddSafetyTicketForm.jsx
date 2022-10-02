import React,{ useState } from "react";
import { useQuery, useMutation } from '@apollo/client';
import { GET_EMPLOYEES } from '../../utils/queries';
import { ADD_SAFETY_TICKET } from "../../utils/mutations";

import './Form.scss'

function AddSafetyTicketForm() {
    const [safetyTicketForm, setSafetyTicketForm] = useState();
    const [addticket] = useMutation(ADD_SAFETY_TICKET)

    let employees;
        const { loading, error, data } = useQuery(GET_EMPLOYEES);
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        if(!loading && !error){
        employees = data.employees
        }


        //This takes the values from the inputs and updates the FlhaForm State
const handleChange = (event) => {
    const { name, value } = event.target;
    setSafetyTicketForm({
        ...safetyTicketForm,
        [name]: value,
    });
};

const handleFormSubmit = async (event) => {
    event.preventDefault();
    const safetyTicketObject = {
        ticket:safetyTicketForm.ticket,
        expirationDate: safetyTicketForm.expirationDate
    }
    console.log(safetyTicketObject);
    try {
    await addticket ({
        variables: { 
            user: safetyTicketForm.employee,
            safetyticket: safetyTicketObject
        },
    });
    } catch (e) {
    console.log(e)
        alert('Submission Failed')
    }
};
  return (
    <div className='main-content'>
        <form className="form">
            <div className='form-field addticket'>
                <label htmlFor="employee">Employee Name</label>
                <select name='employee' type='employee' id='employee' onChange={handleChange}>
                        <option value="null">Select Employee</option>
                        {employees.map((employee)=>{return <option key={employee._id} value={employee._id}>{employee.firstname} {employee.lastname}</option>})}
                    </select>
            </div>

            {/* TODO: Would like to have it be autocomplete with only acceptable safety ticket names example Ground disturbance level 2, First aid level C*/}
            <div className='form-field addticket'>
                <label htmlFor="ticket">Safety Ticket Name</label>
                <input type="text" placeholder='Type of Safety Ticket' name="ticket" onChange={handleChange}/>
            </div>
            <div className='form-field addticket'>
                <label htmlFor="expirationDate">Expiration Date</label>
                <input name='expirationDate' type="date" onChange={handleChange}/>
            </div>
            <button className="form-field form-field-button flha-submit" onClick={handleFormSubmit}>Submit</button>

        </form>
    </div>
  )
}

export default AddSafetyTicketForm