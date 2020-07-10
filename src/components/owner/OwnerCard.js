import React from "react";

const OwnerCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
      <div className="card__inner">
          <picture>
            <img src={require(`${props.picture}`)} alt="Kennel Owner" />
          </picture>
        </div>
        <div className="div__card__name">
          <h3>
            Name: <span className="card-ownerName">{props.name}</span>
          </h3>
        </div>
            <p>Location:  {props.location}</p>
            <p>Experience: {props.experience}</p>
      </div>
    </div>
  );
};

export default OwnerCard;