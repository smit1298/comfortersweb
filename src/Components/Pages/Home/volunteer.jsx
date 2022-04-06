import React from "react";
import { SocialIcon } from "react-social-icons";
import { Card, CardGroup, Container } from "react-bootstrap";
import ann from "../../../Assets/pictures/images/volunteer/ann.jpeg";
import smit from "../../../Assets/pictures/images/volunteer/temitope4.jpg";
import lanre from "../../../Assets/pictures/images/volunteer/lanre.jpg";
import imole from "../../../Assets/pictures/images/volunteer/stephen.jpg";
import "./volunteer.css";

export default function Volunteer() {
  return (
    <Container fluid className="volunteer">
      <div className="text-center pt-4">
        <h4>Meet our Volunteer</h4>
        <h2>Our Volunteer</h2>
      </div>

      <CardGroup className="info">
        <Card>
          <Card.Body className="text-center">
            <img className="roundedCircle" src={ann} alt="" srcset="" />
            <Card.Title>
              <b>Maryann Iberuche </b>
            </Card.Title>

            <Card.Title>
              <small> Vice President</small>
            </Card.Title>

            <Card.Text>
              Making the world a better place, shaping lives and helping others
              matters a lot. It starts from the little things we do, from
              smiling at people down to providing shelter for them.
              {/* There is this unlimited satisfaction I get when peoples problem are being solved
              and their smiles restored. My utmost goal in life is to see people
              happy irrespective of any harsh situations or circumstances
              surrounding them. */}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-center">
            <span>
              <SocialIcon
                url="https://web.facebook.com/sammayrian"
                style={{ height: 25, width: 25 }}
              />
              &nbsp; &nbsp;
              <SocialIcon
                url="https://www.instagram.com/engr_smit/"
                style={{ height: 25, width: 25 }}
              />
              &nbsp; &nbsp;
              <SocialIcon
                url="https://www.linkedin.com/in/isaiah-temitope-03b43a19a/"
                style={{ height: 25, width: 25 }}
              />
              &nbsp; &nbsp;
              <SocialIcon
                url="https://twitter.com/engr_smit"
                style={{ height: 25, width: 25 }}
              />
              &nbsp;
            </span>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body className="text-center">
            <img className="roundedCircle" src={imole} alt="" srcset="" />
            <Card.Title>
              <b>Imoleayo Adebayo</b>
            </Card.Title>
            <Card.Title>
              <small> General Secretary</small>
            </Card.Title>
            <Card.Text>
              LIFE as I know is not a function of how long I live but in the
              quality of how many people lived and are living because I live. I
              believe I'm a solution provider and no problem that passed through
              me remains unsolved.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-center">
            <span>
              <SocialIcon
                url="https://web.facebook.com/imorskee"
                style={{ height: 25, width: 25 }}
              />{" "}
              &nbsp; &nbsp;
              <SocialIcon
                url="https://www.instagram.com/engr_smit/"
                style={{ height: 25, width: 25 }}
              />{" "}
              &nbsp; &nbsp;
              <SocialIcon
                url="https://www.linkedin.com/in/isaiah-temitope-03b43a19a/"
                style={{ height: 25, width: 25 }}
              />{" "}
              &nbsp; &nbsp;
              <SocialIcon
                url="https://twitter.com/engr_smit"
                style={{ height: 25, width: 25 }}
              />{" "}
              &nbsp;
            </span>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Body className="text-center">
            <img className="roundedCircle" src={lanre} alt="" srcset="" />
            <Card.Title>
              <b>Olanrewaju Wemimo</b>
            </Card.Title>
            <Card.Title>
              <small> Project Cordinator</small>
            </Card.Title>
            <Card.Text>
              I have always find joy in giving and helping others rise, having
              the mind of humanity is not a gift from God but a habit anyone can
              cultivate to bring smile to the face of the needy and helpless.
              With the heart of love, we all can make the world a better place.
              {/* One of my dream in Life is to make over a thousand of people
              happy. */}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-center">
            <span className="">
              <SocialIcon
                url="https://web.facebook.com/sammayrian"
                style={{ height: 25, width: 25 }}
              />{" "}
              &nbsp; &nbsp;
              <SocialIcon
                url="https://www.instagram.com/engr_smit/"
                style={{ height: 25, width: 25 }}
              />{" "}
              &nbsp; &nbsp;
              <SocialIcon
                url="https://www.linkedin.com/in/isaiah-temitope-03b43a19a/"
                style={{ height: 25, width: 25 }}
              />{" "}
              &nbsp; &nbsp;
              <SocialIcon
                url="https://twitter.com/engr_smit"
                style={{ height: 25, width: 25 }}
              />{" "}
              &nbsp;
            </span>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Body className="text-center">
            <img className="roundedCircle" src={smit} alt="" srcset="" />
            <Card.Title>
              <b>Temitope Isaiah </b>
            </Card.Title>
            <Card.Title>
              <small> P.R.O</small>
            </Card.Title>
            <Card.Text>
              Motivating people in and around me has been my way of life as i
              believe my contribution in making the world a better place for the
              Comfort of human is one of the best i could give to people around
              me.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-center">
            <span className="">
              <SocialIcon
                url="https://web.facebook.com/sammayrian"
                style={{ height: 25, width: 25 }}
              />
              &nbsp; &nbsp;
              <SocialIcon
                url="https://www.instagram.com/engr_smit/"
                style={{ height: 25, width: 25 }}
              />{" "}
              &nbsp; &nbsp;
              <SocialIcon
                url="https://www.linkedin.com/in/isaiah-temitope-03b43a19a/"
                style={{ height: 25, width: 25 }}
              />{" "}
              &nbsp; &nbsp;
              <SocialIcon
                url="https://twitter.com/engr_smit"
                style={{ height: 25, width: 25 }}
              />{" "}
              &nbsp;
            </span>
          </Card.Footer>
        </Card>
      </CardGroup>
    </Container>
  );
}
