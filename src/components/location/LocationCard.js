import React from "react";


const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
      <div className="card__inner">
          <picture>
            {(props.kennel.picture !== undefined) ?
            <img src={require(`${props.kennel.picture}`)} alt="Kennel Location" /> : null
          }
        </picture>
        </div>
        <div className="div__card__name">
          <h3>
            Name: <span className="card-locationName">{props.kennel.name}</span>
          </h3>
        </div>
        <button type="button" onClick={() => { props.history.push(`/locations/${props.kennel.id}/details`) }}>Details</button>
      </div>
    </div>
  );
};

export default LocationCard;