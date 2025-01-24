import React from "react";
// import img from "next/img";
// import a from "next/a";
// import { Facebook, Instagram, aedin, Twitter, Linkedin } from "lucide-react";
import "./Footer.css"; // Import the CSS file
import blueLogo from "../assets/images/blueLogo.svg";
import Facebook from "../assets/images/services/Facebook.svg";
import Instagram from "../assets/images/services/Instagram.svg";
import Linkedin from "../assets/images/services/LinkedIn.svg";
import Twitter from "../assets/images/services/Twitter.svg";
import Phone from "../assets/images/services/phone.svg";
import mail from "../assets/images/services/mail.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info Column */}
          <div className="company-info">
            <a href="/" className="logo">
              <div className="logo">
                <img src={blueLogo} alt="logo" />
              </div>
            </a>
            <div className="contact-info">
              <div className="mail-div">
                <img src={Phone} alt="phone" className="contact-a" />
                <a href="tel:(510) 854-8766" className="contact-a mail-div">
                  (510) 854-8766
                </a>
              </div>
              <div className="mail-div">
              <img src={mail} alt="phone" />
                <a
                  href="mailto:admin@triuneinfomatics.com"
                  className="contact-a mail-div"
                >
                  admin@triuneinfomatics.com
                </a>
              </div>
              <address className="address">
                39111 Paseo Padre Parkway #306
                <br />
                Fremont, CA 94538
              </address>
            </div>
          </div>

          <div className="footer-right">

          {/* Services Column */}
          <div className="services-column">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-a">
              <li>
                <a href="/services/it-staffing" className="a">
                  IT Staffing
                </a>
              </li>
              <li>
                <a href="/services/speech-therapy" className="a">
                  Speech Therapy Staffing
                </a>
              </li>
              <li>
                <a href="/services/it-solutions" className="a">
                  IT Solutions Reseller
                </a>
              </li>
            </ul>
          </div>

          {/* Pages Column */}
          <div className="footer-page">
            <h3 className="footer-heading">Pages</h3>
            <ul className="footer-a">
              <li>
                <a href="/about" className="a">
                  About us
                </a>
              </li>
              <li>
                <a href="/join" className="a">
                  Join us
                </a>
              </li>
              <li>
                <a href="/contact" className="a">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Jobs Column */}
          <div>
            <h3 className="footer-heading">Jobs</h3>
            <ul className="footer-a">
              <li>
                <a href="/jobs/portal" className="a">
                  Job Portal <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a href="/jobs/referrals" className="a">
                  Referrals
                </a>
              </li>
            </ul>
          </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-text">
            2024 © All rights reserved by Triune Infomatics
          </p>
          <div className="footer-policies">
            <a href="/privacy" className="a">
              Privacy policy
            </a>
            <span className="separator">|</span>
            <a href="/terms" className="a">
              Terms & Conditions
            </a>
          </div>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="#" className="social-icon">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="#" className="social-icon">
              <img src={Linkedin} alt="LinkedIn" />
            </a>
            <a href="#" className="social-icon">
              <img src={Twitter} alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
