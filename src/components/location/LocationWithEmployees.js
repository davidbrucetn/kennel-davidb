import React, { useState, useEffect } from 'react';
import APIManager from "../../modules/APIManager";
import EmployeeCard from '../employee/EmployeeCard';

const LocationWithEmployees = props => {
    const [kennel, setKennel] = useState({});
    const [employees, setEmployees] = useState([]);
    const locationId = props.match.params.locationId;


    useEffect(() => {
        //get location with employee for render
        APIManager.getWithEmployees(locationId, "locations")
            .then(APIResult => {
                setKennel(APIResult);
                setEmployees(APIResult.employees)
            });
    }, [locationId]);

    return (
        <div className="container__parent">
            <div className="container__header">
                <h3>
                    Location:  {kennel.name}
                </h3><br />
            </div>

            {employees.map(employee =>
                <div key={employee.id} className="container-cards">
                    <EmployeeCard
                        employee={employee} kennel={kennel}
                        {...props}
                    />
                </div>
            )}



        </div>
    )
}

export default LocationWithEmployees;