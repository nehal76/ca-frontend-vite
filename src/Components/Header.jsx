import logoCA from '../assets/logoCA.png';
import { NavLink } from "react-router-dom";
import './css/Header.css';
import UseScrollTop from '../CustomHook/UseScrollTop';

export default function Header() {  

  UseScrollTop();
  return (
    <div className="sticky-navbar">
      <header className="d-flex flex-wrap justify-content-center align-items-center py-3 mb-0">
        <NavLink
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <div>
            <img src={logoCA} alt="logo" className="logo" />
          </div>

          <div className='title-subtitle'>
            <h1 className='header-title'>
              Shuaib Akhter         
              <span style={{ color: "green", fontSize: "1em" }}>▲</span>
            </h1>
            <h2 style={{ color: "#20562c", fontSize: "1.2rem" }}>
              Chartered Accountant
            </h2>
          </div>
        </NavLink>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link" activeClassName="active" aria-current="page">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services" className="nav-link" activeClassName="active">
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link" activeClassName="active">
              Contact us
            </NavLink>
          </li>
        </ul>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon hamburger"></span>
        </button>
      </header>
    </div>
  );
}
