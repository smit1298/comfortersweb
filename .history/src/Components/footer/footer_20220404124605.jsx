import React from "react";
import comlogo from "../../Assets/pictures/logo3.jpg";
import { Navbar } from "react-bootstrap";
import Donate from "../button/donateButton";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

export default function footer() {
    return (
    <div className="site-footer">
      <div className="footer-widgets">
        <Container>
          <Row className="w-100">
            <Col lg={3} md={10} className="head w-25 mt-4">
              <Link className="footlink" to="/">
                <Navbar.Brand className="comhomes">
                  <img src={comlogo} alt="Comfort Homes Foundation" srcSet="" />
                  &nbsp; Comfort Homes
                </Navbar.Brand>
              </Link>
              <p className="pt-4 pb-4">
                AYANGBAYI COMFORT HOMES FOUNDATION is a divinely inspired vision
                and we are committed to bringing all what we lay out hearts to
                pass but we need you to support us. As the saying goes that "A
                tree do not make a forest". We love you and we are committed to
                your comfort. LONG LIVE AYANGBAYI COMFORT HOMES FOUNDATION.
              </p>
            </Col>


            <Col lg={3} md={10} className="head mt-4">
              <h2>Navigation</h2>
              <Row className="head w-25 mt-4">
                <Link className="footlink w-25 mt-1 ms-4" to="/">
                  <Navbar.Brand>Home</Navbar.Brand>
                </Link>
                <Link className="footlink w-25 mt-1 ms-4" to="/about">
                  <Navbar.Brand>About us</Navbar.Brand>
                </Link>
                <Link className="footlink w-25 mt-1 ms-4" to="/gallery">
                  <Navbar.Brand>Gallery</Navbar.Brand>
                </Link>
                <Link className="footlink w-25 mt-1 ms-4" to="/contact">
                  <Navbar.Brand>Contact</Navbar.Brand>
                </Link>
                <Link className="footlink w-25 mt-1 ms-4" to="/donate">
                  <Navbar.Brand>Donate</Navbar.Brand>
                </Link>
              </Row>
            </Col>

            <Col lg={3} md={10} className="gallery w-25 head mt-4">
              <h2>Support</h2>
              <Col id="foot-support">
                <p>
                  it is up to us to make the world a better place
                </p>
               <Donate />
              </Col>
            </Col>

            <Col lg={3} md={10} className="head w-25 mt-4">
              <h2>Contact</h2>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
