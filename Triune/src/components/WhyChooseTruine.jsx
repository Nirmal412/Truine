import React from "react";
import boximg from "../assets/images/choose.jpeg";
import './WhyChooseTruine.css'

const WhyChooseTruine = () => {
  return (
    <section className="why-choose-truine">
      <h2 className="section-title">Why choose Truine ?</h2>
      <div className="choose-inner">
        <div className="left-image">
          <img src={boximg} alt="Why Choose Triune" />
        </div>
        <div className="right-content">
          <h2 className="title">20 Years Experience</h2>
          <p className="chooseDescription">
            With a proven track record and an unwavering commitment to
            excellence, Triune Infomatics delivers staffing solutions that
            exceed expectations. Experience the difference with a partner who
            prioritizes your success at every step.
          </p>
          <button>Explore more</button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTruine;
