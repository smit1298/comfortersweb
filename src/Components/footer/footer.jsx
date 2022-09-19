import React from "react"
import comlogo from "../../Assets/pictures/logo3.jpg"
import { Navbar } from "react-bootstrap"
import Donate from "../button/donateButton"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import "./footer.css"

export default function footer() {
  return (
    <div className='site-footer'>
      <div className='footer-widgets'>
        <Container className='footer-container'>
          <Col className='head'>
            <Link className='footlink' to='/'>
              <Navbar.Brand className='comhomes'>
                <img src={comlogo} alt='Comfort Homes Foundation' srcSet='' />
                &nbsp; Comfort Homes
              </Navbar.Brand>
            </Link>
            <p className='pt-4 content-text'>
              AYANGBAYI COMFORT HOMES FOUNDATION is a divinely inspired vision
              and we are committed to bringing all what we lay out hearts to
              pass but we need you to support us. As the saying goes that "A
              tree do not make a forest". We love you and we are committed to
              your comfort. LONG LIVE AYANGBAYI COMFORT HOMES FOUNDATION.
            </p>
          </Col>

          <Col className='head '>
            <h2>Navigation</h2>
            <Row className='head '>
              <Link className='footlink mt-1 ms-4' to='/'>
                <Navbar.Brand>Home</Navbar.Brand>
              </Link>
              <Link className='footlink mt-1 ms-4' to='/about'>
                <Navbar.Brand>About us</Navbar.Brand>
              </Link>
              <Link className='footlink mt-1 ms-4' to='/gallery'>
                <Navbar.Brand>Gallery</Navbar.Brand>
              </Link>
              <Link className='footlink mt-1 ms-4' to='/contact'>
                <Navbar.Brand>Contact</Navbar.Brand>
              </Link>
              <Link className='footlink mt-1 ms-4' to='/donate'>
                <Navbar.Brand>Donate</Navbar.Brand>
              </Link>
            </Row>
          </Col>

          <Col className='gallery head '>
            <h2>Support</h2>
            <Col id='foot-support'>
              <p>it is up to us to make the world a better place</p>
              <Donate />
            </Col>
          </Col>

          <Col className='head '>
            <h2>Contact</h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            voluptatum assumenda placeat, cupiditate aspernatur repellendus
            corrupti tempore reiciendis perferendis ducimus, asperiores officia
            totam quo? Aut nulla possimus dolorum est qui?
          </Col>
        </Container>
        <center className='foot'>
          <h4 className='head'>
            Ayangbayi Comfort Homes Foundation &copy; 2022
          </h4>
        </center>
      </div>
    </div>
  )
}
