import React from "react";
import Banner from "../Banner/Banner";
import CustomBmw from "../CustomBmw/CustomBmw";
import HomeCars from "../HomeCars/HomeCars";
import HomeReviews from "../HomeReviews/HomeReviews";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <HomeCars></HomeCars>
      <HomeReviews></HomeReviews>
      <CustomBmw></CustomBmw>
    </div>
  );
};

export default Home;
