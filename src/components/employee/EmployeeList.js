import React, { useState, useEffect } from 'react';
//import the components we will need
import EmployeeCard from './EmployeeCard';
import APIManager from '../../modules/APIManager';

const EmployeeList = (props) => {
  // The initial state is an empty array
  const [employees, setEmployees] = useState([]);
  const getEmployees = () => {
    // After the data comes back from the API, we
    //  use the setEmployees function to update state
    return APIManager.getAllWithExpandedLocation("employees")
      .then(employeesFromAPI => {
        setEmployees(employeesFromAPI);
    });
  };

 // got the employees from the API on the component's first render
  useEffect(() => {
    getEmployees();
  }, []);

  // Finally we use map() to "loop over" the employees array to show a list of employee cards
  return (
    <>
    <section className="section-content">
      <button type="button"
          className="btn"
          onClick={() => {props.history.push("/employees/new")}}>
          Add Employee
      </button>
    </section>
    <div className="container-cards">
      {employees.map(employee => <EmployeeCard key={employee.id} employee={employee} kennel={employee.location} {...props}/>)}
    </div>
    </>
  );
};
export default EmployeeList