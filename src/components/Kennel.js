import React from "react";
// import AnimalCard from "./animal/AnimalCard";
// import EmployeeCard from "./employee/EmployeeCard";
// import OwnerCard from "./owner/OwnerCard";
// import LocationCard from "./location/LocationCard";

//Children Components
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";

//CSS
import "./Kennel.css";


const Kennel = () => {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    );
  };

/*const Kennel = () => {
  return (
    <div className="div__kennel">
      <div>
        <h2>
          Student Kennels
          <br />
          <small>Loving care when you're not there.</small>
        </h2>
        <address>
          Visit Us at the Nashville North Location
          <br />
          500 Puppy Way
        </address>
      </div>
      <div className="container-cards-animal">
        <AnimalCard />
        <AnimalCard />
        <AnimalCard />
        <AnimalCard />
        <AnimalCard />
      </div>
      <div className="container__kennel__info">
      <div className="header__section"><h3>Locations</h3></div>
          <div className="container__cards__locations">
            <LocationCard />
          </div>

          <div className="header__section"><h3>Owners</h3></div>
          <div className="container__cards__owners">
            <OwnerCard />
          </div>
          <div className="header__section"><h3>Employees</h3></div>
          <div className="container__cards__employees">
              
           
           
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
          </div>
      </div>
    </div>
  );
}; */

export default Kennel;