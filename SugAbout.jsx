import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import "./SugAbout.css";

export default function About() {
  return (
    <div className="container" style={{ marginTop: "70px" }}>
      <div className="row align-items-center">
        <div className="col-md-6 text-start px-5">
          <h4
            className="mb-5"
            style={{ fontSize: "60px", color: "#6D4DDF" }}
            id="poppins-thin"
          >
            About Us
          </h4>
          <p className="poppins" style={{ fontSize: "20px" }}>
            At our playschool, we believe childhood is a magical time filled
            with curiosity, creativity, and discovery. Our play school is a
            warm, welcoming place where little ones explore the world through
            play, imagination, and hands-on learning.
          </p>
          <p className="poppins" style={{ fontSize: "20px" }}>
            We understand how special your child is — and we’re here to support
            their growth, happiness, and confidence every step of the way.
          </p>

          <button className="program-btns mt-3">
            Read more <FaArrowRight />
          </button>
        </div>

        <div className="col-md-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1565882694798-4c9d004e65b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvZnR3YXJlJTIwZGV2ZWxvcGVyJTIwdGVhbXN8ZW58MHx8MHx8fDA%3D"
            alt="About"
            style={{
              maxHeight: "400px",
              objectFit: "cover",
              marginTop: "60px",
              borderRadius: "15px",
              maxWidth: "90%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
