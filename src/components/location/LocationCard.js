import React from "react";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
      <div className="card__inner">
          <picture>
            <img src={require(`${props.picture}`)} alt="Kennel Location" />
          </picture>
        </div>
        <div className="div__card__name">
          <h3>
            Name: <span className="card-locationName">{props.name}</span>
          </h3>
        </div>
        <p>Addr: {props.address}</p>
        <p>Established: {props.established}</p>
      </div>
    </div>
  );
};

export default LocationCard;