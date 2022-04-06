import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import comlogo from "../../Assets/pictures/logo3.jpg";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import Donate from "../button/donateButton";
import "./headerTop.css";
import "./headerBottom.css";
import { Link } from "react-router-dom";

export default function App() {
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    <MDBNavbar className="headerbottom" expand="lg" light bgColor="">
      <MDBContainer fluid className="ms-2 me-1">
        <div className="head d-flex justify-content-between flex-wrap mt-1 mb-1 pt-1 pb-1">
          <Link to="/">
            <Navbar.Brand>
              <img src={comlogo} alt="Comfort Homes Foundation" srcSet="" />
              &nbsp; Comfort Homes
            </Navbar.Brand>
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent15"
          aria-controls="navbarSupportedContent15"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0 me-2">
            <MDBNavbarItem>
              <MDBNavbarLink className="link-style" active  aria-current="page" href="/">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className="link-style" href="about">About Us</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className="link-style" href="gallery">Gallery</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className="link-style" href="contact">Contact</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className="link-style" href="donate">
                <Donate className="ms-3 mb-3 w-4 donate" />
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
