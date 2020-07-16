import { Route, Redirect } from "react-router-dom";
import React from "react";

import Login from "./auth/Login";
import Home from "./home/Home";

import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from './animal/AnimalForm';
import AnimalEditForm from './animal/AnimalEditForm';

import LocationList from "./location/LocationList";
import LocationWithEmployees from "./location/LocationWithEmployees"

import EmployeeList from "./employee/EmployeeList";
import EmployeeWithAnimals from "./employee/EmployeesWithAnimals"
import EmployeeForm from "./employee/EmployeeForm";
import EmployeeEditForm from "./employee/EmployeeEditForm";

import OwnerList from "./owner/OwnerList";
import OwnerDetail from './owner/OwnerDetails';


const ApplicationViews = (props) => {

  const hasUser = props.hasUser;
  const setUser = props.setUser;

  return (

    <React.Fragment>

      <Route path="/login" render={props => {
        return <Login setUser={setUser} {...props} />
      }}
      />

      <Route
        exact path="/"
        render={props => {
          if (hasUser) {
            return <Home />;
          } else {
            return <Redirect to="/login" />
          }
        }}
      />

      <Route exact path="/locations" render={(props) => {
        if (hasUser) {
          return <LocationList {...props} />;
        } else {
          return <Redirect to="/login" />
        }
      }}
      />

      <Route exact path="/locations/:locationId(\d+)/details" render={(props) => {
        if (hasUser) {
          return <LocationWithEmployees {...props} />
        } else {
          return <Redirect to="/login" />
        }

      }} />

      {/* <Route exact path="/locations/:locationId(\d+)" render={props => {
          if (hasUser) {
              //Pass the locationId to the LocationDetailComponent
              return (<LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} /> );
             } else {
              return <Redirect to="/login" />
            }
        }}
      /> */}

      <Route exact path="/animals" render={(props) => {
        if (hasUser) {
          return <AnimalList {...props} />

        } else {
          return <Redirect to="/login" />
        }
      }} />

      <Route exact path="/animals/:animalId(\d+)" render={props => {
        if (hasUser) {
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />

      <Route path="/animals/:animalId(\d+)/edit" render={props => {
        if (hasUser) {
          return <AnimalEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />

      {/* New Animal Form */}
      <Route path="/animals/new" render={(props) => {
        if (hasUser) {
          return <AnimalForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />



      <Route exact path="/employees" render={(props) => {
        if (hasUser) {
          return <EmployeeList {...props} />;
        } else {
          return <Redirect to="/login" />
        }
      }}
      />
      <Route path="/employees/new" render={(props) => {
        if (hasUser) {
          return <EmployeeForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />



      <Route exact path="/employees/:employeeId(\d+)/details" render={(props) => {

        return <EmployeeWithAnimals {...props} />
      }} />

      <Route path="/employees/:employeeId(\d+)/edit" render={props => {
        if (hasUser) {
          return <EmployeeEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      {/*
        This is a new route to handle a URL with the following pattern:
        http://localhost:3000/employees/1

        It will not handle the following URL because the `(\d+)` matches only numbers after the slash
        http://localhost:3000/employees/meg
      
      */}

      <Route
        exact path="/owners"
        render={props => {
          if (hasUser) {
            return <OwnerList {...props} />
          } else {
            return <Redirect to="/login" />
          };
        }}
      />

      <Route path="/owners/:ownerId(\d+)" render={(props) => {
        //pass ownerId to Emp Detail Component
        if (hasUser) {
          return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} />
        } else {
          return <Redirect to="/login" />
        }
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