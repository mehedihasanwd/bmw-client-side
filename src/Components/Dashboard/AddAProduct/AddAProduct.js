import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./AddAProduct.css";

const AddAProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // Used axios to load cars data
    axios
      .post("https://still-atoll-84410.herokuapp.com/cars", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("A new car has added successfully");
          reset();
        }
      });
  };
  return (
    <div className="min-vh-100 container py-3">
      <div className="add-new-product py-4">
        <h1 className="mt-3 mb-5">Add a new Car</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true, maxLength: 500 })}
            placeholder="Name..."
          />
          <textarea {...register("desc")} placeholder="Description..." />
          <input type="number" {...register("price")} placeholder="Price..." />
          <input {...register("img")} placeholder="Image url..." />
          <input className="btn-submit" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddAProduct;
