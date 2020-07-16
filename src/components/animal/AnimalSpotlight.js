import React, { useState, useEffect } from 'react';
import APIManager from '../../modules/APIManager'
import "./AnimalSpotlight.css";

const AnimalSpotlight = props => {
    const [animal, setAnimal] = useState({ name: "", breed: "", picture: ""});
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        
      APIManager.get(props.animalId,"animals").then(animal => {
          setAnimal({
            name: animal.name,
            breed: animal.breed,
            picture: animal.picture
          });
          setIsLoading(false);
        });
      }, [props.animalId]);

      return (
        (!isLoading) && (
      <div className="animal-spotlight">
      <img src={require(`${animal.picture}`)} alt="My Dog" />
      <div>
        <h3>{animal.name}</h3>
        <p>{animal.breed}</p>
      </div>
    </div>) 
    );
}

export default AnimalSpotlight;