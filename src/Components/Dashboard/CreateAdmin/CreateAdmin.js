import React, { useState } from "react";
import { TextField, Alert } from "@mui/material";

const CreateAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnblur = (e) => {
    setEmail(e.target.value);
    e.target.value = " ";
  };

  const handleAdmin = (e) => {
    const user = { email };
    fetch("https://still-atoll-84410.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });

    e.preventDefault();
  };

  return (
    <div className="container min-vh-100 py-5">
      <h2>Make Admin</h2>
      <form className="w-100" onSubmit={handleAdmin}>
        <TextField
          onBlur={handleOnblur}
          label="Email"
          type="email"
          variant="standard"
          sx={{ width: "100%", mb: 3 }}
        />
        <button type="submit" className="btn-danger border-0 rounded-1">
          Submit
        </button>
      </form>
      {success && (
        <Alert severity="success">Successfully admin role added</Alert>
      )}
    </div>
  );
};

export default CreateAdmin;
