import React from "react";
import President from "./president";
import Carousel from "./carousel";
import Cardlist from "./cardList";
import AboutTop from "../About/top";
import Footer from "../../footer/footer";
import Volunteer from "./volunteer";

export default function home() {
  return (
    <div>
      <Carousel />
      {/* <President /> */}
      <Cardlist />
      <AboutTop />
      <Volunteer />
      <Footer />
    </div>
  );
}
