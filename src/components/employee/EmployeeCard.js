import React from "react";

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
      <div className="card__inner">
          <picture>
            <img src={require(`${props.picture}`)} alt="Dog Caretaker" />
          </picture>
        </div>
        <div className="div__card__name">
          <h3>
            Name: <span className="card-employeeName">{props.name}</span>
          </h3>
        </div>
        <p>Location:  {props.location}</p>
        <p>Experience: {props.experience}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;