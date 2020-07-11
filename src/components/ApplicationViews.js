import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList"
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from './animal/AnimalForm'
//only include these once they are built - previous practice exercise
import LocationList from "./location/LocationList";
import LocationDetail from "./location/LocationDetail"
import EmployeeList from "./employee/EmployeeList";
import EmployeeDetail from "./employee/EmployeeDetail";
import OwnerList from "./owner/OwnerList";
import OwnerDetail from './owner/OwnerDetails'


const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route exact path="/animals" render={(props) => {
        return <AnimalList {...props}/>
      }} />

      <Route
        path="/animals/:animalId(\d+)"
        render={props => {
          // Pass the animalId to the AnimalDetailComponent
          return (
            <AnimalDetail
              animalId={parseInt(props.match.params.animalId)}
              {...props}
            />
          );
        }}
      />

    {/* New Animal Form */}
    <Route path="/animals/new" render={(props) => {
      return <AnimalForm {...props} />
    }} />

      <Route exact path="/location"
        render={props => {
          return <LocationList />;
        }}
      />

      <Route
        path="/locations/:locationId(\d+)"
        render={props => {
          //Pass the locationId to the LocationDetailComponent
          return (
            <LocationDetail
              locationId={parseInt(props.match.params.locationId)}
              {...props}
              />
          );
        }}
      />

      <Route
        exact path="/employee"
        render={props => {
          return <EmployeeList />;
        }}
      />
      
      <Route path="/employees/:employeeId(\d+)" render={(props) => {
        //pass employeeId to Emp Detail Component
        return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)}/>
      }} />

      {/*
        This is a new route to handle a URL with the following pattern:
        http://localhost:3000/employees/1

        It will not handle the following URL because the `(\d+)` matches only numbers after the slash
        http://localhost:3000/employees/meg
      
      */}

      <Route
        exact path="/owner"
        render={props => {
          return <OwnerList />;
        }}
      />
      
      <Route path="/owners/:ownerId(\d+)" render={(props) => {
        //pass ownerId to Emp Detail Component
        return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)}/>
      }} />

      {/*
        This is a new route to handle a URL with the following pattern:
        http://localhost:3000/employees/1

        It will not handle the following URL because the `(\d+)` matches only numbers after the slash
        http://localhost:3000/employees/meg
      
      */}


    </React.Fragment>
  );
};

export default ApplicationViews;