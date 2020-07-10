import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css'
const imageDir = require.context('./images/', true);
const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", picture: "" });

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(props.animalId)
      .then(animal => {
        setAnimal({
          name: animal.name,
          breed: animal.breed,
          picture: animal.picture
        });
      });
  }, [props.animalId]);
 

  return (
    <div className="card">
      <div className="card-content">
        { (animal.picture !== "") ? 
        <picture>
        <img src={require(`${animal.picture}`)} alt="My Dog" />
        </picture> : null
        }
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{animal.name}</span></h3>
        <p>Breed: {animal.breed}</p>
      </div>
    </div>
  );
}

export default AnimalDetail;