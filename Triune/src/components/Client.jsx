import React from "react";
import img1 from "../assets/images/clients/1.png";
import img2 from "../assets/images/clients/2.png";
import img3 from "../assets/images/clients/3.png";
import './Client.css'

const clientData = [img1, img2, img3, img1, img2, img3, img1, img2, img3, img1];

const Client = () => {
  return (
    <section className="client-section">
      <h2 className="section-title">Happy Clients</h2>

      <div className="client-boxes">
        {clientData.map((image, index) => (
          <div key={index} className="client-box">
            <img src={image} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Client;
