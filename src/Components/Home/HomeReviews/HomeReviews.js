import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import HomeReview from "../HomeReview/HomeReview";

const HomeReviews = () => {
  // State declaration for Reviews
  const [homeReviews, setHomeReviews] = useState([]);

  useEffect(() => {
    // Fetching All Reviews
    fetch("https://still-atoll-84410.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setHomeReviews(data));
  }, []);

  return (
    <div className="container py-5">
      <h2>
        Our Happy<span className="text-danger"> Customers</span>
      </h2>
      {homeReviews.length === 0 ? (
        <Spinner animation="border" variant="danger" />
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-5 py-5">
          {homeReviews.map((review) => (
            <HomeReview key={review._id} review={review}></HomeReview>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeReviews;
