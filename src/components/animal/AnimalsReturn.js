import { useState, useEffect } from 'react';
//import the components we will need
import AnimalManager from '../../modules/AnimalManager';

const BreedsReturn = () => {
    // The initial state is an empty array
    const [breeds, setBreeds] = useState([]);

    const getLocations = () => {
      // After the data comes back from the API, we
      //  use the setBreeds function to update state
      return AnimalManager.getBreeds().then(breedsFromAPI => {
        setBreeds(breedsFromAPI)
      });
    };
    
    // got the locations from the API on the component's first render
    useEffect(() => {
      getLocations();
    }, []);
  
    // Finally we use map() to "loop over" the locations array to show a list of location cards
    return (
        breeds
    );
};
export default BreedsReturn