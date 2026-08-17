import { ArrowCornerIcon } from "../../../assets/icons";
import "./TravelCard.css";
import React from "react";

const TravelCard = ({ title, country, price, image }) => {
  return (
    <article className="travel-card">
      <img src={image} alt={title} />
      <div className="travel-gradient" />
      <div className="travel-info">
        <div>
          <strong>{title}</strong>
          <small>{country}</small>
        </div>
        <div className="price">
          <span>Start From</span>
          <b>${price}</b>
        </div>
      </div>
      <a className="card-link" href="" aria-label={title}>
        <ArrowCornerIcon />
      </a>
    </article>
  );
};
export default TravelCard;
