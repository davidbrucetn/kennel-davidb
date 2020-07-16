import React, { useState, useEffect } from 'react';
import APIManager from '../../modules/APIManager'
import AnimalCard from '../animal/AnimalCard';

const EmployeeWithAnimals = props => {
    const [ employee, setEmployee ] = useState({});
    const [ animals, setAnimals ] = useState([]);
    const employeeId = props.match.params.employeeId;

    const deleteAnimal = id => {
        APIManager.delete(id,animals)
          .then(() => APIManager.getAll("animals").then(setAnimals));
      };
    

    useEffect(() => {
        //get employee with animal for render
        APIManager.getWithAnimals(employeeId,"employees")
          .then(APIResult => {
              setEmployee(APIResult);
              setAnimals(APIResult.animals)
          });
    },[employeeId]);

    return (
        <div className="container__parent">
            <div className="container__header">
                <h3>
                    Employee:  {employee.name}
                </h3><br/>
            </div>
            
            {animals.map(animal =>
               <div key={animal.id} className="container-cards">
                  <AnimalCard
                    animal={animal}
                    deleteAnimal={deleteAnimal}
                    {...props}
                    />
                </div>
                )}



        </div>
    )
}

export default EmployeeWithAnimals;