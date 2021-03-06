import { useState, useEffect } from 'react';
//import the components we will need
import APIManager from "../../modules/APIManager"


const LocationsReturn = () => {
    // The initial state is an empty array
    const [locations, setLocations] = useState([]);

    const getLocations = () => {
      // After the data comes back from the API, we
      //  use the setLocations function to update state
      return APIManager.getAll("locations").then(locationsFromAPI => {
        setLocations(locationsFromAPI)
      });
    };
    
    // got the locations from the API on the component's first render
    useEffect(() => {
      getLocations();
    }, []);
  
    // Finally we use map() to "loop over" the locations array to show a list of location cards
    return (
        locations
    );
};
export default LocationsReturn