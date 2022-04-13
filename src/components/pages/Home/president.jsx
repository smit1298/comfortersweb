import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import tevez from "../../../Assets/pictures/images/volunteer/stephen.jpg";
// import "./president.css";

export default function President() {
  return (
    <div>
      <Container>
        <Row>
        <Col>
          <img src={tevez} alt="Ayangbayi Oluwaseyi" srcset="" />
        </Col>

        <Col>
          <h2>Meet Our President</h2>
          <p>
            An average person feed on less than one dollar per day. We have
            thousands of people struggling to get a decent 3 square meal per
            day. Over the years, I have come to realize that making both young
            and old happy is more than heart warming. Showing kindness,
            compassion and love to everyone around is paramount. I believe that
            there are more benefit to increasing kindness in the world.
          </p>
        </Col>
        </Row>
      
      </Container>
    </div>
  );
}
