import React, { useState, useEffect } from 'react';
import { firstLetterCase } from '../../modules/helpers'
import EmployeeManager from '../../modules/EmployeeManager';
import LocationManager from '../../modules/LocationManager';


import './EmployeeForm.css';


const LocationList = () => {
    // The initial state is an empty array
    const [locations, setLocations] = useState([]);
  
    const getLocations = () => {
      // After the data comes back from the API, we
      //  use the setLocations function to update state
      return LocationManager.getAll().then(locationsFromAPI => {
        setLocations(locationsFromAPI)
      });
    };
  
    console.log(`arrays ${locations} -> ${setLocations}`)
    // got the locations from the API on the component's first render
    useEffect(() => {
      getLocations();
    }, []);
  
    // Finally we use map() to "loop over" the locations array to show a list of location cards
    return (
        locations
    );
  }



const EmployeeForm = props => {
    const [ employee, setEmployee ] = useState({ name: "", experience: "", location: "", picture: "./employee.jpg" });
    const [ isLoading, setIsLoading ] = useState(false);
    
    const buildLocations = () => {
        let selectHTML = []
        LocationList().forEach((location => {
            selectHTML.push(<option value={location.name}>{location.name}</option>)
        }));
        return selectHTML;
    }

    const handleFieldChange = evt => {
        // stateToChange is previous keys/values in employee with spread (...)
        const stateToChange = { ...employee };

        //key and value of new employee object, using helper to capitalize first letter if not experience
        stateToChange[evt.target.id] = (evt.target.id === "name") ? firstLetterCase(evt.target.value):(evt.target.value);
        console.log("field:",evt.target.id, "->", evt.target.value)
        console.log(stateToChange)
        setEmployee(stateToChange)
    }; // End handleFieldChange

    //Local method for valuding, set loading status, create Employee  object, invoke Emp Mgr post and redirect to list
    const constructNewEmployee = evt => {
        evt.preventDefault();
        if (employee.name === "" || employee.experience === "" || employee.location === "" ) {
            window.alert("Please input all fields");
        } else {
            setIsLoading(true);
            //create emp and redirect to list
            EmployeeManager.post(employee)
            .then(() => props.history.push("/employees"))
        }
    }; // End construct 

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="name"
                            placeholder="Employee Name"
                        />
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="experience"
                            placeholder="Employee Experience"
                        />
                        <label htmlFor="experience">Experience</label>
                        <select name="location" id="location"
                        required
                        onChange={handleFieldChange}>
                            {buildLocations()}
                        </select>
                        <label htmlFor="locations">Locations</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={isLoading}
                        onClick={constructNewEmployee}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    )


}; // End EmployeeForm

export default EmployeeForm;