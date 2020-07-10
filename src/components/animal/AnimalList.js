import React, { useState, useEffect } from 'react';
//import the components we will need
import AnimalCard from './AnimalCard';
import AnimalManager from '../../modules/AnimalManager';

const AnimalList = () => {
  // The initial state is an empty array
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return AnimalManager.getAll().then(animalsFromAPI => {
      setAnimals(animalsFromAPI)
    });
  };

  console.log(`arrays ${animals} -> ${setAnimals}`)
  // got the animals from the API on the component's first render
  useEffect(() => {
    getAnimals();
  }, []);

  const deleteAnimal = id => {
    AnimalManager.delete(id)
      .then(() => AnimalManager.getAll().then(setAnimals));
  };

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      {animals.map(animal => <AnimalCard key={animal.id} animal={animal} id={animal.id} name={animal.name} location={animal.location} breed={animal.breed} picture={animal.picture}
      deleteAnimal={deleteAnimal}  />)}
    </div>
  );

};
export default AnimalList