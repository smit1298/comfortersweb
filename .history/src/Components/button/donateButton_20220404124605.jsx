import React from "react";
import { Button } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.css';
import "./donateButton.css";

export default function Donate() {
  return (
    <section>
      <Button className="ms-3 mb-3 donate" variant="success">
        Donate
      </Button>
    </section>
  );
}
