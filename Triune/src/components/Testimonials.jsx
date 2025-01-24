import React, { useState } from "react";
import "./Testimonials.css";
import google from "../assets/images/services/google.svg";
import clientLogo from "../assets/images/services/google.svg"; // Example for Clients
import consultantLogo from "../assets/images/services/google.svg"; // Example for Consultants

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("google"); // Default category

  const allTestimonials = {
    google: [
      {
        id: 1,
        text: "Triune is truly a great place to work, with a strong focus on employee well-being and growth opportunities.",
        author: "Anumit Sharma",
        date: "2024-07-16",
        rating: 5,
      },
      {
        id: 2,
        text: "The supportive environment makes it a wonderful workplace. I'm grateful to be a part of this organization.",
        author: "Nirmal",
        date: "2024-07-16",
        rating: 4,
      },
      {
        id: 3,
        text: "Triune is truly a great place to work, with a strong focus on employee well-being and growth opportunities.",
        author: "Anumit Sharma",
        date: "2024-07-16",
        rating: 5,
      },
      {
        id: 4,
        text: "The supportive environment makes it a wonderful workplace. I'm grateful to be a part of this organization.",
        author: "Nirmal",
        date: "2024-07-16",
        rating: 4,
      },
    ],
    clients: [
      {
        id: 1,
        text: "The team at Triune delivered exceptional service. Their professionalism and dedication are unmatched.",
        author: "Client A",
        date: "2024-06-20",
        rating: 5,
      },
      {
        id: 2,
        text: "The collaboration experience with Triune has been nothing short of excellent.",
        author: "Client B",
        date: "2024-06-18",
        rating: 4,
      },
      {
        id: 3,
        text: "The team at Triune delivered exceptional service. Their professionalism and dedication are unmatched.",
        author: "Client A",
        date: "2024-06-20",
        rating: 5,
      },
      {
        id: 4,
        text: "The collaboration experience with Triune has been nothing short of excellent.",
        author: "Client B",
        date: "2024-06-18",
        rating: 4,
      },
    ],
    consultants: [
      {
        id: 1,
        text: "Triune's support for consultants is truly commendable. Their processes are well-organized and efficient.",
        author: "Consultant X",
        date: "2024-05-10",
        rating: 5,
      },
      {
        id: 2,
        text: "Working with Triune has been an amazing experience, and I look forward to future collaborations.",
        author: "Consultant Y",
        date: "2024-05-08",
        rating: 4,
      },
    ],
  };

  const testimonials = allTestimonials[activeCategory];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentSlide(0); // Reset to the first slide when switching categories
  };

  return (
    <div className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-container-child">
          <h1>Testimonials</h1>

          <nav className="testimonials-nav">
            <a
              // href="#"
              className={activeCategory === "google" ? "active" : ""}
              onClick={() => handleCategoryChange("google")}
            >
              Google Reviews
            </a>
            <a
              // href="#"
              className={activeCategory === "clients" ? "active" : ""}
              onClick={() => handleCategoryChange("clients")}
            >
              Clients
            </a>
            <a
              // href="#"
              className={activeCategory === "consultants" ? "active" : ""}
              onClick={() => handleCategoryChange("consultants")}
            >
              Consultants
            </a>
          </nav>
        </div>

        <div className="testimonials-slider">
          <div className="testimonials-wrapper">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${
                  index === currentSlide ? "active" : ""
                }`}
                style={{
                  transform: `translateX(${(index - currentSlide) * 103}%)`,
                }}
              >
                <div className="rating">
                  <div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">
                      ★
                    </span>
                  ))}
                  </div>
                  <img
                    src={
                      activeCategory === "google"
                        ? google
                        : activeCategory === "clients"
                        ? clientLogo
                        : consultantLogo
                    }
                    alt="Logo"
                    className="category-logo"
                  />
                </div>
                <p className="testimonial-text">
                  {testimonial.text}
                  <button className="read-more">Read more</button>
                </p>
                <div className="testimonial-author">{testimonial.author}</div>
                <div className="testimonial-date">{testimonial.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="slider-dots">
        <button className="slider-arrow prev" onClick={prevSlide}>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
              fill="currentColor"
            />
          </svg>
        </button>

        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}

        <button className="slider-arrow next" onClick={nextSlide}>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
