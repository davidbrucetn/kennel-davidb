import React, { useState, useEffect } from "react";
import APIManager from '../../modules/APIManager'
import { firstLetterCase } from '../../modules/helpers'
import LocationsReturn from '../location/LocationsReturn';
import "./EmployeeForm.css";

const EmployeeEditForm = props => {
    const [ employee, setEmployee ] = useState({name: "", breed: "", experience: "" });
    const [ isLoading, setIsLoading ] = useState(false);
    const employeeId = props.match.params.employeeId;

    const buildLocations = () => {
        let selectHTML = []
        LocationsReturn().forEach((kennel => {
            selectHTML.push(<option key={kennel.id} value={kennel.id}>{kennel.name}</option>)
        }));
        return selectHTML;
    }

    const handleFieldChange = evt => {
        const stateToChange = { ...employee };
        stateToChange[evt.target.id] = evt.target.value;
        stateToChange[evt.target.id] = (evt.target.id === "name") ? firstLetterCase(evt.target.value):(evt.target.value);
        setEmployee(stateToChange)
    };

    const updateExistingEmployee = evt => {
        evt.preventDefault();
        setIsLoading(true);

        // This is an edit, so we need the id
        const editedemployee = {
            id: employeeId,
            name: employee.name,
            experience: employee.experience,
            location: employee.locationId,
            picture: employee.picture
        };

        APIManager.update(editedemployee,"employees")
          .then(() => props.history.push("/employees"))
    }
useEffect(() => {
    APIManager.get(employeeId,"employees")
       .then(employee => {
           setEmployee(employee);
           setIsLoading(false)
       });
}, [employeeId]);

return (
        <>
        <form>
        <fieldset>
            <div className="formgrid">
                <input
                type="text"
                required
                className="form-control"
                onChange={handleFieldChange}
                id="name"
                value={employee.name}
                />
                <label htmlFor="name">Employee name</label>

                <input
                type="text"
                required
                className="form-control"
                onChange={handleFieldChange}
                id="experience"
                value={employee.experience}
                />
                <label htmlFor="experience">Experience</label>
                <select name="location" id="location"
                        required
                        value={employee.locationId}
                        onChange={handleFieldChange}>
                            {buildLocations()}
                </select>
                <label htmlFor="location">Locations</label>
            </div>
            <div className="alignRight">
                <button
                type="button" disabled={isLoading}
                onClick={updateExistingEmployee}
                className="btn btn-primary"
                >Submit</button>
            </div>
            </fieldset>  
        </form>
        </>
    )
}

export default EmployeeEditForm;