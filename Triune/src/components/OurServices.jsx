import React, { useState } from "react";
import {
  MdWeb,
  MdOutlineShoppingCart,
  MdOutlineDesignServices,
  MdArrowOutward,
  MdArrowForward,
} from "react-icons/md";

import img1 from "../assets/images/services/1.png";
import img2 from "../assets/images/services/2.jpeg";
import img3 from "../assets/images/services/3.jpeg";
import icon1 from "../assets/images/services/icon1.svg";
import icon2 from "../assets/images/services/icon2.svg";
import icon3 from "../assets/images/services/icon3.svg";
import "./OurServices.css";

const iconsMap = {
  MdWeb: MdWeb,
  MdOutlineShoppingCart: MdOutlineShoppingCart,
  MdOutlineDesignServices: MdOutlineDesignServices,
};
const servicesData = [
  {
    id: 1,
    icon: "MdWeb",
    title: "IT Staffing",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis nisl arcu magna maecenas elit id ac.",
    image: img1,
    icon: icon1,
  },
  {
    id: 2,
    icon: "MdOutlineShoppingCart",
    title: "Speech Therapy Staffing",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis nisl arcu magna maecenas elit id ac.",
    image: img2,
    icon: icon2,
  },
  {
    id: 3,
    icon: "MdOutlineDesignServices",
    title: "IT Solution Reseller",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis nisl arcu magna maecenas elit id ac.",
    image: img3,
    icon: icon3,
  },
];

const OurServices = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <section className="services-section">
      <div className="service-inner-section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-container">
          {servicesData.map((service) => {
            const IconComponent = iconsMap[service.icon];
            return (
              <div
                key={service.id}
                className="service-box"
                onMouseEnter={() => setHovered(service.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="service-left">
                  <div className="service-icon-top">
                    <img src={service.icon} />
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                  </div>
                  <div className="service-icon-bottom">
                    {hovered === service.id ? (
                      <MdArrowForward />
                    ) : (
                      <MdArrowOutward />
                    )}
                  </div>
                </div>
                <div className="service-right">
                  <img src={service.image} alt={service.title} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
