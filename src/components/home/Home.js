import React from "react";

const Home = () => {
  return (
    <div className="container-cards">
    <img src={require(`./dog-farm.jpg`)}></img>
    <div class="div__home__text">
    <address>
      Visit Us at the Nashville North Location
      <br />
      500 Puppy Way
    </address>
    </div>
    </div>
  );
};

export default Home;