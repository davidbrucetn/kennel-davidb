import React, { useState, useEffect } from 'react';
//import the components we will need
import AnimalCard from "./AnimalCard"
import APIManager from '../../modules/APIManager'

const AnimalList = (props) => {
  // The initial state is an empty array
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return APIManager.getAllWithExpandedLocation("animals").then(animalsFromAPI => {
      setAnimals(animalsFromAPI)
    });
  };

  // console.log(`arrays ${animals} -> ${setAnimals}`)
  // got the animals from the API on the component's first render
  useEffect(() => {
    getAnimals();
  }, []);

  const deleteAnimal = id => {
    APIManager.delete(id,"animals")
      .then(() => APIManager.getAllWithExpandedLocation("animals").then(setAnimals));
  };

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    
    <>
      <section className="section-content">
        <button type="button"
            className="btn"
            onClick={() => {props.history.push("/animals/new")}}>
            Admit Animal
        </button>
      </section>
      <div className="container-cards">
        {animals.map(animal => <AnimalCard key={animal.id} animal={animal} kennel={animal.location}
        deleteAnimal={deleteAnimal} {...props} />)}
      </div>
    </>
  );

};
export default AnimalList