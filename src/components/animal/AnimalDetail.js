import React, { useState, useEffect } from 'react';
import APIManager from '../../modules/APIManager'
import './AnimalDetail.css'


const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", picture: "", employeeId: "" });
  const [ kennel, setKennel ] = useState({ kennel: "" })
  const [ employee, setEmployee ] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    APIManager.getWithExpandedLocation(props.animalId,"animals").then(animal => {
      setAnimal({
        name: animal.name,
        breed: animal.breed,
        picture: animal.picture,
        employeeId: animal.employeeId
      });
      setKennel(animal.location.name)
      APIManager.get(animal.employeeId,"employees")
        .then(employee =>
          setEmployee(employee))
      setIsLoading(false);
    });
  }, [props.animalId]);   

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    APIManager.delete(props.animalId,"animals").then(() =>
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
          <p>Location: {kennel}</p>
          <p>Wranger: {employee.name}</p>
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