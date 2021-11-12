import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";

const ManageProducts = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(`https://still-atoll-84410.herokuapp.com/cars`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you wanna delete this car?");
    if (proceed) {
      const url = `https://still-atoll-84410.herokuapp.com/cars/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = cars.filter((car) => car._id !== id);
            setCars(remaining);
          }
        });
    }
  };

  return (
    <div className="container min-vh-100 py-5">
      <h2>Manage Cars</h2>
      <div className="row row-cols-1 row-cols-md-3 g-5 py-5">
        {cars.map((car) => (
          <CardGroup key={car._id}>
            <Card className="shadow-lg">
              <Card.Img variant="top" height="300px" src={car?.img} />
              <Card.Body className="p-3">
                <Card.Title>
                  <span className="text-danger">Name: </span> {car?.name}
                </Card.Title>
                <Card.Title>
                  <span className="text-danger">Price: </span> ${car?.price}
                </Card.Title>
                <Card.Text>
                  <span className="text-danger">Description: </span>
                  {car?.desc}
                </Card.Text>
                <button
                  className="btn-danger border-0 fs-5 py-1 rounded-1 px-5"
                  onClick={() => handleDelete(car?._id)}
                >
                  Delete
                </button>
              </Card.Body>
            </Card>
          </CardGroup>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
