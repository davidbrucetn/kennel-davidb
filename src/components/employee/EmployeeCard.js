import React from "react";
import { Link } from "react-router-dom";


const EmployeeCard = (props) => {
  return (
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
        <p>Location:  {props.employee.location}</p>
        <Link to={`/employees/${props.employee.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeCard;