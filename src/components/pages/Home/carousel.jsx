import React from "react";
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import carousel1 from "../../../Assets/pictures/images/achfgettogether/Image.png";
import carousel2 from "../../../Assets/pictures/images/achfgettogether/kids.png";
import carousel3 from "../../../Assets/pictures/images/achfgettogether/Imagegather.jpg";
import "./carousel.css";

export default function carousel() {
  return (
    <div className="mb-4">
      <Carousel>
        <div>
          <img src={carousel1} alt="" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={carousel2} alt="" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={carousel3} alt="" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={carousel3} alt="" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}
