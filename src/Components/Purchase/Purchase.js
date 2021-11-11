import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Purchase = () => {
  const { id } = useParams();
  const { user } = useAuth();

  console.log(user);

  const [cars, setCars] = useState([]);
  const [car, setCar] = useState({});

  useEffect(() => {
    fetch("https://still-atoll-84410.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  useEffect(() => {
    const findCars = cars.find((car) => car._id === id);
    setCar(findCars);
  }, [cars, id]);

  const handleOrderSubmit = (e) => {
    e.preventDefault();

    // User Details
    const email = user.email;
    const customerName = user?.displayName;
    const carName = car.name;
    const img = car.img;
    const desc = car.desc;
    const date = new Date();
    const dateRegion = date.toLocaleDateString();
    const price = car.price;
    const ordersInfo = {
      customerName,
      email,
      carName,
      desc,
      img,
      price,
      orderDate: dateRegion,
    };

    fetch("https://still-atoll-84410.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ordersInfo),
    });
    alert("Order has been placed successfully");

    e.target.reset();
  };

  return (
    <div className="min-vh-100 container py-3">
      <h2>Purchase Your BMW</h2>
      <h3>Car Id: {car?._id}</h3>

      <div className="row row-cols-1 row-cols-md-2 g-2 py-5">
        <CardGroup>
          <Card className="shadow-lg">
            <Card.Img variant="top" height="300px" src={car?.img} />
            <Card.Body className="p-3">
              <Card.Title>
                <span className="text-danger">Name: </span> {car?.name}
              </Card.Title>
              <Card.Title>
                <span className="text-danger">Price: </span> ${car?.price}
              </Card.Title>
              <Card.Text>{car?.desc}</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <div>
          <form onSubmit={handleOrderSubmit}>
            <input
              type="text"
              className="w-75 my-2 p-1"
              name=""
              id=""
              defaultValue={user?.displayName || ""}
            />
            <input
              type="email"
              className="w-75 my-2 p-1"
              name=""
              id=""
              defaultValue={user?.email || ""}
            />
            <input
              type="number"
              className="w-75 my-2 p-1"
              name=""
              id=""
              placeholder="Your Phone Number"
            />

            <textarea
              name=""
              placeholder="Home Address"
              id=""
              className="w-75"
              required
            ></textarea>
            <input
              type="text"
              className="w-75 my-2 p-1"
              name=""
              id=""
              required
              placeholder="City, Country"
            />
            <input
              className="w-75 btn-danger border-0 p-2 my-2 rounded-1"
              type="submit"
              value="Purchase"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
