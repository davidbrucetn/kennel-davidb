import React from "react";
import { Link } from "react-router-dom";
import "./Animal.css";

const AnimalCard = props => {
  
  return (
    <div className="card">
      <div className="card-content">
        <div className="card__inner">
          <picture>
            <img src={require(`${props.animal.picture}`)} alt="My Dog" />
          </picture>
        </div>
        <div className="div__card__name">
          <h3>
            Name: <span className="card-petname">{props.name}</span>
          </h3>
        </div>
          <p>Breed: {props.breed}</p>
          <p>Location: {props.location}</p>
          <Link to={`/animals/${props.id}`}>
            <button>Details</button>
        </Link>
        <button type="button" onClick={() => props.deleteAnimal(props.id)}>Discharge</button>
      </div>
    </div>
  );
};

export default AnimalCard;