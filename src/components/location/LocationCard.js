import React from "react";
import { Link } from "react-router-dom";


const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
      <div className="card__inner">
          <picture>
            <img src={require(`${props.location.picture}`)} alt="Kennel Location" />
          </picture>
        </div>
        <div className="div__card__name">
          <h3>
            Name: <span className="card-locationName">{props.location.name}</span>
          </h3>
        </div>
        <Link to={`/locations/${props.location.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default LocationCard;