import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'


const LocationDetail = props => {
    const [location, setLocation] = useState({ name: "", breed: "", picture: "" });
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(props.locationId)
      .then(location => {
        setLocation({
          name: location.name,
          address: location.address,
          established: location.established,
          picture: location.picture
        });
      });
  }, [props.locationId]);
 
  return (
    <div className="card">
      <div className="card-content">
        { (location.picture !== "") ? 
            <picture>
            <img src={require(`${location.picture}`)} alt="My Location" />
            </picture> : null
        }
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
        <div className="div__detail">
          <p>Address: {location.address}</p>
          <p>Established: loccation.established</p>
        </div>
      </div>
    </div>
  );
}

export default LocationDetail;