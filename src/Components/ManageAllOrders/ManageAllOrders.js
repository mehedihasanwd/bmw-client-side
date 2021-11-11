import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);

  const [status, setStatus] = useState("");

  // Handle Status
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleUpdate = (id) => {
    alert("Order has been updated");
    fetch(`https://still-atoll-84410.herokuapp.com/updateStatus/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    });
  };

  useEffect(() => {
    fetch(`https://still-atoll-84410.herokuapp.com/allorders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you wanna delete this order?"
    );
    if (proceed) {
      const url = `https://still-atoll-84410.herokuapp.com/allorders/${id}`;
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
      <h2>Manage All Orders: {orders.length}</h2>
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
                  {order?.desc.slice(0, 20)}
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <input
                    onChange={handleStatus}
                    type="text"
                    defaultValue={order.status}
                    className="mx-1 w-25"
                  />
                  <button
                    className="btn-danger border-0 fs-5 py-1 rounded-1 px-5 mx-1"
                    onClick={() => handleDelete(order?._id)}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleUpdate(order._id)}
                    className="btn-success border-0 fs-5 py-1 rounded-1 mx-1"
                  >
                    Update
                  </button>
                </div>
              </Card.Body>
            </Card>
          </CardGroup>
        ))}
      </div>
    </div>
  );
};

export default ManageAllOrders;
