import DonateButton from "./DonateButton";

import "./Card.css";

const Card = (props) => (
  <div className="card">
    <img className="img" src={props.source} alt={props.description} />
    <div className="text">
      <h2 className="heading">{props.heading}</h2>
      <div className="cta">
        <p className="paragraph">{props.paragraph}</p>
        <div><DonateButton /></div>
      </div>
    </div>
  </div>
);

export default Card;