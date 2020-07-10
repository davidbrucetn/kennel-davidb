import React from "react";
import { Link } from "react-router-dom";
import "./Animal.css";

const AnimalCard = props => {
  
  return (
    <div className="card">
      <div className="card-content">
        <div className="card__inner">
        { (props.animal.picture !== undefined) ? 
          <picture>
          <img src={require(`${props.animal.picture}`)} alt="My Dog" />
          </picture> : <img src={require("./dog.svg")} alt="My Dog" />
        }
        </div>
        <div className="div__card__name">
          <h3>
            Name: <span className="card-petname">{props.animal.name}</span>
          </h3>
        </div>
          <p>Breed: {props.animal.breed}</p>
          <Link to={`/animals/${props.animal.id}`}>
            <button>Details</button>
        </Link>
        <button type="button" onClick={() => props.deleteAnimal(props.animal.id)}>Discharge</button>
      </div>
    </div>
  );
};

export default AnimalCard;