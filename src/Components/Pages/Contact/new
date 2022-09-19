import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactForm = () => {
  // Name, message validation
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const [firstNameErr, setFirstNameErr] = useState({});
  const [lastNameErr, setLastNameErr] = useState({});
  const [emailError, setEmailError] = useState("");
  const [messageErr, setMessageErr] = useState({});

  //   on submit actions
  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      // send this data to your backend or some external API
      setFirstName("");
      setLastName("");
      setMessage("");
      setEmail("");
    }

    // call the server
    console.log("Submitted");
  };

  const formValidation = () => {
    const firstNameErr = {};
    const lastNameErr = {};
    const messageErr = {};

    let isValid = true;

    if (firstName.length === 0) {
      firstNameErr.firstNameShort = "First name is required";
      isValid = false;
    }

    if (firstName.trim().length > 10) {
      firstNameErr.firstNameLong = "First name is too long";
      isValid = false;
    }

    if (lastName.length === 0) {
      lastNameErr.lastNameShort = "Last name is required";
      isValid = false;
    }

    if (lastName.trim().length > 10) {
      lastNameErr.lastNameLong = "Last name is too long";
      isValid = false;
    }
    if (message.length === 0) {
      messageErr.messageShort = "Please type your message";
      isValid = false;
    }

    setFirstNameErr(firstNameErr);
    setLastNameErr(lastNameErr);
    setMessageErr(messageErr);
    return isValid;
  };

  // email validation
  const [email, setEmail] = useState("");
  const validateEmail = (e) => {
    setEmail(e.target.value)
    var validateMail = validateEmails(email);

    if (validateMail) {
      setEmailError("");
    } else {
      setEmailError(
        <h6
          style={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          Enter a valid email
        </h6>
      );
    }
  };

  function validateEmails(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <Container>
      <Row>
        <Col>
          <div className="col-sm-12">
            <Form onSubmit={onSubmit}>
              <Form.Group className="w-50">
                <Form.Label>First Name</Form.Label> &nbsp;
                <Form.Control
                  className="firstName w-100"
                  autoFocus
                  name="name"
                  placeholder="Enter Firstname"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </Form.Group>
              {Object.keys(firstNameErr).map((key) => {
                return <div style={{ color: "red" }}>{firstNameErr[key]}</div>;
              })}

              <Form.Group className="w-50">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  className="w-100"
                  autoFocus
                  name="name"
                  placeholder="Enter Lastname"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </Form.Group>
              {Object.keys(lastNameErr).map((key) => {
                return <div style={{ color: "red" }}>{lastNameErr[key]}</div>;
              })}

              <Form.Group className="w-50">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="w-100"
                  type="email"
                  required="true"
                  autoFocus
                  value = {email}
                  placeholder="Enter email"
                  onChange={(e) => validateEmail(e)}
                />
              </Form.Group>
              <>{emailError}</>
              <Form.Group className="w-50">
                <Form.Label
                  htmlFor="defaultFormContactMessageEx"
                  className="grey-text"
                >
                  Your message
                </Form.Label>
                <textarea
                  type="text"
                  id="defaultFormContactMessageEx"
                  className="form-control w-100"
                  required="true"
                  value={message}
                  rows="3"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </Form.Group>
              {Object.keys(messageErr).map((key) => {
                return <div style={{ color: "red" }}>{messageErr[key]}</div>;
              })}
              <br />
              <Button type="submit">Submit</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;