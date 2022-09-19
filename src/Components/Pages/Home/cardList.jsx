import React from "react";
import spelling from "../../../Assets/pictures/images/spellingbee1/spell.jpg";
import group from "../../../Assets/pictures/images/spellingbee/group.jpg";
import relief from "../../../Assets/pictures/images/1/relief.jpg";

import { Card, CardGroup, Container, Row, Button } from "react-bootstrap";

const cardStyle = {
  borderRadius: "35px 0",
  border: "2px solid #3ded97",
};

const cardGroupStyle = {
  textAlign: "center",
};
const cardTextStyle = {
  textAlign: "left",
};

const cardImage = {
  borderRadius: "35px 0 0 0",
  borderBottom: "2px solid #3a5311",
  height: "250px",
};

const button = {
  backgroundColor: "green",
  //   border: "3px solid #3ded97",
  borderRadius: "35px",
  // padding: "3px",
  border: "none",
  width: "90px",
};

export default function cardlist() {
  return (
    <Container>
      <Row>
        <h3 className="mt-4 mb-4 text-center"> Causes we are serving </h3>

        <CardGroup style={cardGroupStyle} className="mb-5">
          <Card className="me-4 ms-4 mt-4 mb-4" style={cardStyle}>
            <Card.Img style={cardImage} variant="top" src={spelling} />
            <Card.Body>
              <Card.Title>Sponsor a child</Card.Title>
              <Card.Text style={cardTextStyle}>
                "One of the most powerful forces on Earth is the prayer of a
                child" says a wise man, so we employ you to join us as we
                sojourn to put our nation right by putting our children right.
              </Card.Text>
            </Card.Body>
            <Button className="ms-3 mb-3" style={button}>Donate</Button>
          </Card>

          <Card className="me-4 ms-4 mt-4 mb-4" style={cardStyle}>
            <Card.Img style={cardImage} variant="top" src={group} />
            <Card.Body>
              <Card.Title>Education as a treasure</Card.Title>
              <Card.Text style={cardTextStyle}>
                A saying goes thus, "He who opens a school door, closes a
                prison", so we as a team are committed to making sure that
                Education is widely spread in Nigeria and beyond as we have the
                capacity.
              </Card.Text>
            </Card.Body>
            <Button className="ms-3 mb-3" style={button}>Donate</Button>
          </Card>

          <Card className="me-4 ms-4 mt-4 mb-4" style={cardStyle}>
            <Card.Img style={cardImage} variant="top" src={relief} />
            <Card.Body>
              <Card.Title>Relieving poverty</Card.Title>
              <Card.Text style={cardTextStyle}>
                "Overcoming poverty is not a act of charity, it is the
                protection of fundamental human right, the right to dignity and
                decent life". We are committed to making this possible thereby
                making the nation a better place.
              </Card.Text>
            </Card.Body>
            <Button className="ms-3 mb-3" style={button}>Donate</Button>
          </Card>
        </CardGroup>
      </Row>
    </Container>
  );
}
