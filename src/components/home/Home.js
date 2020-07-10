import React from "react";

const Home = () => {
  return (
    <div className="container-cards">
      <div className="container__home">
      <img src={require(`./dog-farm.jpg`)} alt="dog farm"></img>
          <div className="div__home__text">
            <address>
              Visit Us at the Nashville North Location
              <br />
              500 Puppy Way
            </address>
          </div>
      </div>
    </div>
  );
};

export default Home;