import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeCar = (props) => {
  const { name, img, _id, desc, price } = props.car;
  return (
    <CardGroup>
      <Card className="shadow-lg">
        <Card.Img variant="top" height="300px" src={img} />
        <Card.Body>
          <Card.Title>
            <span className="text-danger">Name: </span> {name}
          </Card.Title>
          <Card.Title>
            <span className="text-danger">Price: </span> ${price}
          </Card.Title>
          <Card.Text>
            <Card.Text>
              <span className="text-danger">Description </span>{" "}
              {desc.split(" ").slice(0, 40).toString().replace(/,/g, " ")}
            </Card.Text>
          </Card.Text>
          <Link to={`/car/${_id}`}>
            <button className="btn-danger fs-5 rounded-1 border-0 px-3 py-1">
              BUY NOW
            </button>
          </Link>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default HomeCar;
