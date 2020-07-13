import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css'


const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", picture: "", location: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(props.animalId).then(animal => {
      setAnimal({
        name: animal.name,
        breed: animal.breed,
        picture: animal.picture,
        location: animal.location
      });
      setIsLoading(false);
    });
  }, [props.animalId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    AnimalManager.delete(props.animalId).then(() =>
      props.history.push("/animals")
    );
  };
 

  return (
    (!isLoading) ? 
    <div className="card">
      <div className="card-content">
        { (!isLoading) ? 
        <picture>
        <img src={require(`${animal.picture}`)} alt="My Dog" />
        </picture> :<img src={require("./dog.svg")} alt="My Dog" />
        }
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{animal.name}</span></h3>
        <div className="div__detail">
          <p>Breed: {animal.breed}</p>
          <p>Location: {animal.location}</p>
        </div>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
    :null
  );
}

export default AnimalDetail;