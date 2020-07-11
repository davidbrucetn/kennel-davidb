import React, {useState, useEffect} from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerDetails.css';

const OwnerDetail = props => {
    const [owner, setOwner] = useState({name:"", experience: "", location: "", picture: ""})
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //get(id) from OwnerManager and hang on to data, put it into state
        OwnerManager.get(props.ownerId)
            .then(owner => {
                setOwner({
                    name: owner.name,
                    experience: owner.experience,
                    location: owner.location,
                    picture: owner.picture
                });
        setIsLoading(false);
        });
    },[props.ownerId]);

    return (
        (!isLoading) ? 
        <div className="card">
            <div className="card-content">
                {(!isLoading) ?
                    <picture>
                    <img src={require(`${owner.picture}`)} alt="Owner" />
                    </picture> : <img src={require("./owner.png")} alt="Owner" />
                }
                <h3>Name: <span style={{ color: 'darkslategrey' }}>{owner.name}</span></h3>
                <div className="div__detail">
                    <p>Experience: {owner.experience}</p>
                    <p>Location: {owner.location}</p>
                </div>
            </div>
        </div>
        
        :null
        
    );
}

export default OwnerDetail;
