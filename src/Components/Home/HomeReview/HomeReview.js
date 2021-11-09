import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const Service = (props) => {
  const { name, img, review, rating } = props.review;
  return (
    <CardGroup>
      <Card className="shadow-lg">
        <Card.Img variant="top" height="300px" src={img} />
        <Card.Body>
          <Card.Title>
            <span className="text-danger">Name: </span> {name}
          </Card.Title>
          <Card.Text>{review}</Card.Text>
          <Card.Title>
            <span className="text-danger">Review: </span> {rating}
          </Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default Service;
