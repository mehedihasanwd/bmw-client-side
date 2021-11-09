import React from "react";
import { Carousel } from "react-bootstrap";
import heroImg from "../../../Media/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block banner w-100" src={heroImg} alt="First slide" />
        <Carousel.Caption>
          <h1 className="text-lg">Sheer Driving Pleasure</h1>
          <p className="fs-4 text-sm">
            FASTERPIECE. DESIGNED FOR DRIVING PLEASURE.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
