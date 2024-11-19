import WhatsAppButton from "./WhatsAppButton";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import './css/Footer.css'
import UseScrollTop from '../CustomHook/UseScrollTop';

export default function Footer() {
  UseScrollTop();
  
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/submit-form", {
        email: email,
        query: query,
      });
      setStatus("Form submitted successfully!");
      alert("Seccessfully")
      setTimeout(() => {
        setStatus(null);
      }, 3000);
    } 
    catch (error) {
      console.error("There was an error submitting the form:", error);
      setStatus("Failed to submit form");
    }

    setEmail("");
    setQuery("");
  };

  return (
    <footer>
      <div className="row">
        <div className="col-5 col-md-2">
          <h5 className="footer-subheadings">Page Links</h5>
          <ul className="footer-nav">
            <li className="footer-nav-item">
              <NavLink
                to="/"
                exact
                className="footer-nav-link"
                activeClassName="active"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li className="footer-nav-item">
              <NavLink
                to="/Services"
                exact
                className="footer-nav-link"
                activeClassName="active"
                aria-current="page"
              >
                Services
              </NavLink>
            </li>
            <li className="footer-nav-item">
              <NavLink
                to="/About"
                exact
                className="footer-nav-link"
                activeClassName="active"
                aria-current="page"
              >
                About
              </NavLink>
            </li>
            <li className="footer-nav-item">
              <NavLink
                to="/contact"
                exact
                className="footer-nav-link"
                activeClassName="active"
                aria-current="page"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="col-5 col-md-2">
          <h5 className="footer-subheadings">Services</h5>
          <ul className="footer-nav">
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Income Tax Filling
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Investment & Financial Planning
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                TDS Return Filing
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                GST Registration & GST Returns Filing
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                NRI Income Tax Filing
              </a>
            </li>
          </ul>
        </div>

        <div className="col-1 col-md-2">
          <h5 className="footer-subheadings">About Us</h5>
          <ul className="footer-nav">
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Who we are
              </a>
            </li>
            <li className="footer-nav-item">
              <NavLink
                to="/about"
                className="footer-nav-link"
                activeClassName="active"
              >
                Why choose Me
              </NavLink>
            </li>
            <li className="footer-nav-item">
              <NavLink
                to="/about_shuaib"
                className="footer-nav-link"
                activeClassName="active"
                aria-current="page"
              >
                About Shuaib Akhter
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Query Form ---------------->>>>>>>>>>>>>>>>>*/}

        <div className="col-md-5 offset-md-1">
          <form onSubmit={handleSubmit} className="mx-2">
            <h5 className="footer-subheadings">Book an Appointment</h5>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label
                htmlFor="newsletter1"
                className="visually-hidden"
              ></label>
              <input
                id="newsletter1"
                type="text"
                className="form-control"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                id="newsletter2"
                type="text"
                className="form-control"
                placeholder="Query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
              />
              <button className="btn btn-success" type="submit">
                Send
              </button>
            </div>
            <div className="footer-whatsapp">
              <WhatsAppButton
                phoneNumber="+91 8800721984"
                message="Hello, I need support!"
              />
            </div>
          </form>
          <p>{status}</p>
        </div>
      </div>

      <div className="d-flex justify-content-center py-2 border-top footer-copyright">
        <p>© 2024 Shuaib Akhter. All rights reserved.</p>
      </div>
    </footer>
  );
}
