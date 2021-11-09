import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import HomeCar from "../HomeCar/HomeCar";

const HomeCars = () => {
  // State declaration for Cars
  const [homeCars, setHomeCars] = useState([]);

  useEffect(() => {
    // Fetching All Cars
    fetch("https://still-atoll-84410.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setHomeCars(data));
  }, []);

  return (
    <div className="container py-5">
      <h2>
        Our Brand New<span className="text-danger"> BMWs</span>
      </h2>
      {homeCars.length === 0 ? (
        <Spinner animation="border" variant="danger" />
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-5 py-5">
          {homeCars.slice(0, 6).map((car) => (
            <HomeCar key={car._id} car={car}></HomeCar>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeCars;
