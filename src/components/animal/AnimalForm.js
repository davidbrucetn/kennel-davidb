import React, { useState } from 'react';
import APIManager from '../../modules/APIManager'
import { firstLetterCase } from '../../modules/helpers';
import LocationsReturn from '../location/LocationsReturn';
import BreedsReturn from "./AnimalsReturn";
import './AnimalForm.css';
  
// Form function for adding animals
const AnimalForm = props => {

  //useState for animal (local to AnimalForm) that will update the named fields of the object
  const [animal, setAnimal] = useState({ name: "", breed: "" , picture: "./dog.svg"});

  //useState to determine if form is loading, so buttons will be disabled if true
  const [isLoading, setIsLoading] = useState(false);

  const buildLocations = () => {
    let selectHTML = [];
    LocationsReturn().forEach((location => {
        selectHTML.push(<option value={location.id}>{location.name}</option>)
    }));
    return selectHTML;
  }

  
  const buildBreeds = () => {
    let selectHTML = [];
    BreedsReturn().forEach((breed => {
        selectHTML.push(<option value={breed.name}>{breed.name}</option>)
    }));
    return selectHTML;
  }

  // handleFieldChange called from button onChange event, will update object as characters are typed in the fields. 
  const handleFieldChange = evt => {
    // stateToChange is previous keys/values in animal with spread (...)
    const stateToChange = { ...animal };
    // console.log("stateToChange Prev Value:",stateToChange)
    
    //stateToChange[key] set to value from input event
    stateToChange[evt.target.id] = firstLetterCase(evt.target.value);
    // console.log("stateToChange key value=",stateToChange[evt.target.id], "id:",evt.target.id)

    // sets new animal object 
    setAnimal(stateToChange);

  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
  */
  const constructNewAnimal = evt => {
    // Prevent Default Activity (don't refresh)
    evt.preventDefault();
    if (animal.name === "" || animal.breed === "") {
      window.alert("Please input an animal name and breed");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      APIManager.post(animal,"animals")
        .then(() => props.history.push("/animals"));
    }
  };

  return (
    (!isLoading) && (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Animal name"
            />
            <label htmlFor="name">Name</label>
            <select name="breed" id="breed" value={animal.breed}
                        required
                        onChange={handleFieldChange}>
                            {buildBreeds()}
                        </select>
            <label htmlFor="breed">Breed</label>
            <select name="location" id="location"
                        required
                        onChange={handleFieldChange}>
                            {buildLocations()}
                        </select>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewAnimal}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  ))
};

export default AnimalForm;