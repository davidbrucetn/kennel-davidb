import React from "react";
import APIManager from '../../modules/APIManager'



const EmployeeCard = (props) => {
    
  const handleDelete = () => {
    //invoke the delete function in Employee Mgr and re-direct to the emp list
    APIManager.delete(props.employeeId,"employees").then(() =>
    props.history.push("/employees")
    );
  };

    

  return (

     (props.employee !== undefined) ? (
    <div className="card">
      <div className="card-content">
      <div className="card__inner">
          <picture>
            <img src={require(`${props.employee.picture}`)} alt="Dog Caretaker" />
          </picture>
        </div>
        <div className="div__card__name">
          <h3>
            Name: <span className="card-employeeName">{props.employee.name}</span>
          </h3>
        </div>
        <p>Location: {props.kennel.name} </p>
        <button type="button" onClick={() => { props.history.push(`/employees/${props.employee.id}/details`) }}>Details</button>
        <button type="button" onClick={() => props.history.push(`/employees/${props.employee.id}/edit`) }>Edit</button>
        <button type="button" onClick={handleDelete}>Re-home Employee</button>
      </div>
    </div>):null 
  );
};

export default EmployeeCard;