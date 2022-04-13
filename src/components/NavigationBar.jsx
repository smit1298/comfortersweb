import { Link } from "react-router-dom";

import DonateButton from "./DonateButton";
import logo from "../images/logo.jpg"
import "./NavigationBar.css";

const NavigationBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"><img className="logo" src={logo} alt="" /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link text-link active" to="/" aria-current="page">Home</Link>
          <Link className="nav-link text-link" to="/about">About us</Link>
          <Link className="nav-link text-link" to="/gallery">Gallery</Link>
          <Link className="nav-link text-link" to="/contact">Contact</Link>
          <Link className="nav-link button-link" to="/donate"><DonateButton /></Link>
        </div>
      </div>
    </div>
  </nav>
);

export default NavigationBar;