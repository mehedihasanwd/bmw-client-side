import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Car from "../Car/Car";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";

const Cars = () => {
  // State declaration for Cars
  const [Cars, setCars] = useState([]);

  useEffect(() => {
    // Fetching All Cars
    fetch("https://still-atoll-84410.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="container min-vh-100 py-5">
        <h2>
          Our All New<span className="text-danger"> BMWs</span>
        </h2>
        {Cars.length === 0 ? (
          <Spinner animation="border" variant="danger" />
        ) : (
          <div className="row row-cols-1 row-cols-md-3 g-5 py-5">
            {Cars.map((car) => (
              <Car key={car._id} car={car}></Car>
            ))}
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Cars;
