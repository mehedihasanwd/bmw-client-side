import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch(`https://still-atoll-84410.herokuapp.com/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [myOrders]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you wanna delete this?");
    if (proceed) {
      const url = `https://still-atoll-84410.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = myOrders.filter((myorder) => myorder._id !== id);
            setMyOrders(remaining);
          }
        });
    }
  };

  return (
    <div className="min-vh-100 container py-3">
      <h2>My Orders</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
        {myOrders.map((myorder) => (
          <CardGroup key={myorder._id}>
            <Card className="shadow-lg">
              <Card.Img variant="top" height="300px" src={myorder?.img} />
              <Card.Body className="p-3">
                <Card.Title>
                  <span className="text-danger">Name: </span> {myorder?.carName}
                </Card.Title>
                <Card.Title>
                  <span className="text-danger">Price: </span> ${myorder?.price}
                </Card.Title>
                <Card.Text>
                  <span className="text-danger">Description: </span>
                  {myorder?.desc}
                </Card.Text>
                <button
                  className="btn-danger border-0 fs-5 py-1 rounded-1 px-5"
                  onClick={() => handleDelete(myorder._id)}
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

export default MyOrders;
