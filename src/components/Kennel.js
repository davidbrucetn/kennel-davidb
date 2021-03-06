import React, { useState, useEffect } from "react";

//Children Components
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";

//CSS
import "./Kennel.css";


const Kennel = () => {
  // Check if credentials are in session storage with boolean return
 
 const isAuthenticated = () => ( (localStorage.getItem("credentials") !== null) || (sessionStorage.getItem("credentials") !== null))
  

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = (user,storageType) => {
    if (storageType === "session") {
      sessionStorage.setItem("credentials", JSON.stringify(user));
    } else {
      localStorage.setItem("credentials",JSON.stringify(user))
    }
    setHasUser(isAuthenticated());
  };

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
    localStorage.clear();
    setHasUser(isAuthenticated());
  }

  useEffect(() => {
    isAuthenticated();
  }, []);

    return (
      <>
        <NavBar hasUser={hasUser} clearUser={clearUser} />
        <ApplicationViews hasUser={hasUser} setUser={setUser} />
      </>
    );
  };


export default Kennel;