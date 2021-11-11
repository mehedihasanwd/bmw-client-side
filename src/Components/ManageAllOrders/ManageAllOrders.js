import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://still-atoll-84410.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you wanna delete this order?"
    );
    if (proceed) {
      const url = `https://still-atoll-84410.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <div className="container min-vh-100 py-4">
      <h2>Manage All Orders</h2>
      <div className="row row-cols-1 row-cols-md-2 g-5 py-5">
        {orders.map((order) => (
          <CardGroup key={order._id}>
            <Card className="shadow-lg">
              <Card.Img variant="top" height="300px" src={order?.img} />
              <Card.Body className="p-3">
                <Card.Title>
                  <span className="text-danger">Name: </span> {order?.carName}
                </Card.Title>
                <Card.Title>
                  <span className="text-danger">Price: </span> ${order?.price}
                </Card.Title>
                <Card.Text>
                  <span className="text-danger">Description: </span>
                  {order?.desc}
                </Card.Text>
                <button
                  className="btn-danger border-0 fs-5 py-1 rounded-1 px-5"
                  onClick={() => handleDelete(order?._id)}
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

export default ManageAllOrders;
