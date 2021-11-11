import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./AddAReview.css";

const AddAReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // Used axios to load reviews data
    axios
      .post("https://still-atoll-84410.herokuapp.com/reviews", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("A review has added successfully");
          reset();
        }
      });
  };
  return (
    <div className="min-vh-100 container py-3">
      <div className="add-new-review py-4">
        <h1 className="mt-3 mb-5">Add a Review</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true, maxLength: 500 })}
            placeholder="Your Name..."
          />
          <input {...register("img")} placeholder="Image url..." />
          <textarea
            {...register("review")}
            placeholder="Write your feedback..."
          />
          <input
            type="number"
            {...register("rating", { required: true, maxLength: 1 })}
            placeholder="Give rating out of 5"
          />
          <input className="btn-submit" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddAReview;
