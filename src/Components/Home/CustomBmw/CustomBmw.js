import React from "react";

const CustomBmw = () => {
  return (
    <div className="py-5 container">
      <h2 className="py-1">
        Wanna Make Your Custom BMW?
        <span className="text-danger"> Let's Just Build Now!</span>
      </h2>
      <div>
        <form className="py-3">
          <div className="mb-3 text-start">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your contact email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              textarea="write your message"
              placeholder="Write your all requirements here for custom BMW"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-danger">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomBmw;
