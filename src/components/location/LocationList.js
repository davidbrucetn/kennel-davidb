import React, { useState, useEffect } from 'react';
//import the components we will need
import LocationCard from './LocationCard';
import APIManager from "../../modules/APIManager"


const LocationList = (props) => {
  // The initial state is an empty array
  const [kennels, setKennels] = useState([]);

  const getLocations = () => {
    // After the data comes back from the API, we
    //  use the setLocations function to update state`
    return APIManager.getAll("locations")
      .then(locationsFromAPI => {
      setKennels(locationsFromAPI)
    });
  };

  useEffect(() => {
    getLocations();
  }, []);

 
  return (
    <>
     
    <div className="container-cards">
     {kennels.map(kennel => 
        <LocationCard key={kennel.id} kennel={kennel} {...props} />)}
    </div>
    </>
  );
};
export default LocationList