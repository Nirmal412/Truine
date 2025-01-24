import React from "react";
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="text-container">
          <div className="left-btn-container">
            <button className="round-btn">IT Staffing Simplified</button>
          </div>
          <h1 className="main-heading">Transforming Careers Since 2005</h1>
          <p className="description">
            At Triune, we have been staffing the right way for nearly two
            decades. Whether you're seeking your next big career opportunity or
            looking to take your current role to new heights, we are committed
            to helping you find the perfect job— or a better one if you're
            already employed.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
