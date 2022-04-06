import React from "react";
import comforters from "../../../Assets/pictures/images/spellingbee/comforters.jpg";
import background from "../../../Assets/pictures/images/1/background.jpg";

import { Container, Row, Col, Button } from "react-bootstrap";
import "./about.css";

const containerStyle = {
  backgroundImage: `url(${background})`,
};

const button = {
  backgroundColor: "green",
  //   border: "3px solid #3ded97",
  borderRadius: "35px",
  padding: "15px",
  border: "none",
  float: "left",
};

const imageStyle = {
  width: "100%",
  height: "462px",
  borderRadius: "5%",
};

const text = {
  // width: "87%",
  fontSize: "18px",
  fontFamily: "Roboto, sans-serif",
  lineHeight: "1.8",
};

export default function aboutTop() {
  return (
    <div
      style={containerStyle}
      className="support-company-area section-padding"
    >
      <Container>
      
        <Row className="align-items-center justify-content-between">
          <Col xl={5} lg={6} md={10} className="mb-4">
            <div className="support-location-img">
              <img style={imageStyle} src={comforters} alt="who we are..." />
            </div>
          </Col>

          <Col xl={5} lg={6} md={10} className="mt-4">
            <div>
              <h1>
                <i>
                  <b> Who we are... </b>
                </i>
              </h1>
              <p style={text}>
                AYANGBAYI COMFORT HOMES FOUNDATION is an African leading
                platform for helping the needy meet up their average needs,
                building of systems to alleviate poverty in the nation,
                commitment to the wide spread of education amongst the children
                and many more as can be seen from our various outreaches. Based
                on our results of what has been done in our communities and
                beyond, we have been able to make it so obvious that we are not
                just a platform but we live and breathe by making other people
                live and to their fullest.
                {/* On this
              note, AYANGBAYI COMFORT HOMES FOUNDATION is a divinely inspired
              vision and we are committed to bringing all what we lay out hearts
              to pass but we need you to support us. As the saying goes that *"A
              tree do not make a forest"*. We love you and we are committed to
              your comfort. LONG LIVE AYANGBAYI COMFORT HOMES FOUNDATION. */}
              </p>
              <Button style={button}> Learn More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
