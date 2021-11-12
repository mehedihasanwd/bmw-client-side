import React from "react";
import Footer from "../../Shared/Footer";
import Header from "../../Shared/Header";
import Banner from "../Banner/Banner";
import CustomBmw from "../CustomBmw/CustomBmw";
import HomeCars from "../HomeCars/HomeCars";
import HomeReviews from "../HomeReviews/HomeReviews";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header></Header>
      <Banner></Banner>
      <HomeCars></HomeCars>
      <HomeReviews></HomeReviews>
      <CustomBmw></CustomBmw>
      <Footer></Footer>
    </div>
  );
};

export default Home;
