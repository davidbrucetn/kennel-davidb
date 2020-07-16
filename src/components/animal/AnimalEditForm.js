import React, { useState, useEffect } from "react";
import APIManager from '../../modules/APIManager'
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalForm.css";

const AnimalEditForm = props => {
    const [ animal, setAnimal ] = useState({name: "", breed: "", employeeId: "" });
    const [ breeds, setBreeds ] = useState([]);
    const [ employees, setEmployees ] = useState([]);
    const [ kennels, setKennels ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    const animalId = props.match.params.animalId;

    const handleFieldChange = evt => {
        const stateToChange = { ...animal };
        stateToChange[evt.target.id] = evt.target.value;
        setAnimal(stateToChange)
    };

    const updateExistingAnimal = evt => {
        evt.preventDefault();
        setIsLoading(true);

        // This is an edit, so we need the id
        const editedAnimal = {
            id: animalId,
            name: animal.name,
            breed: animal.breed,
            location: animal.location,
            picture: animal.picture,
            employeeId: animal.employeeId
        };

        APIManager.update(editedAnimal,"animals")
          .then(() => props.history.push("/animals"))
    }
useEffect(() => {
    APIManager.get(animalId,"animals")
       .then(animal => {
           setAnimal(animal);
           APIManager.getAll("employees")
             .then(employees =>
                setEmployees(employees))
           AnimalManager.getBreeds()
            .then(breeds => {
                setBreeds(breeds);
            });
            APIManager.getAll("locations")
             .then(kennels => {
                 setKennels(kennels)
             })
           setIsLoading(false) 
       });
    
}, [animalId]);

return (
        <>
        <form>
        <fieldset>
            <div className="formgrid">
                <input
                type="text"
                required
                className="form-control"
                onChange={handleFieldChange}
                id="name"
                value={animal.name}
                />
                <label htmlFor="name">Animal name</label>

                <select name="breed" id="breed" value={animal.breed}
                        required
                        onChange={handleFieldChange}>
                            {breeds.map(breed => {
                                return <option key={breed.name} value={breed.name}>{breed.name}</option>
                            })}
                </select>
                <label htmlFor="breed">Breed</label>
                <select name="location" id="location"
                        required
                        value={animal.locationId}
                        onChange={handleFieldChange}>
                            {kennels.map(kennel => {
                                return <option key={kennel.id} value={kennel.id}>{kennel.name}</option>
                            })}
                </select>
                <label htmlFor="location">Locations</label>
                <select
                    className="form-control"
                    id="employeeId"
                    value={animal.employeeId}
                    onChange={handleFieldChange}
                    >
                    {employees.map(employee =>
                        <option key={employee.id} value={employee.id}>
                        {employee.name}
                        </option>
                    )}
                </select>
                <label htmlFor="employeeId">Wrangler</label>
            </div>
            <div className="alignRight">
                <button
                type="button" disabled={isLoading}
                onClick={updateExistingAnimal}
                className="btn btn-primary"
                >Submit</button>
            </div>
            </fieldset>  
        </form>
        </>
    )
}

export default AnimalEditForm;