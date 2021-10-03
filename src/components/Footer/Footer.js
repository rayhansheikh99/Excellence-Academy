import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneSquare,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>Excellence Academy</h1>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>

                <p className="mt-5">
                  <small>Excellence Academy &copy; All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <NavLink className="footer-menu" to="/home">Home</NavLink><br/>
                  <NavLink className="footer-menu" to="/courses">Our Courses</NavLink><br/>
                  <NavLink className="footer-menu" to="/about">About Us</NavLink><br/>
                  <NavLink className="footer-menu" to="/contact">Contact Us</NavLink>
 
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>Sign up for the Newsletter</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                /> <br/>
                <Button className='mt-1'>Subscribe</Button>
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faPhoneSquare} />
                  </div>
                  <div>
                    <h5 className='ms-2'>+8801885458785</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </div>
                  <div className='ms-2'>
                    <p>
                    Road No. 1, Mirpur, Dhaka
                      <br /> Dhaka Division, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;