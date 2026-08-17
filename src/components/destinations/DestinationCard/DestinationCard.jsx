import { ArrowCornerIcon } from "../../../assets/icons";
import "./DestinationCard.css";
import React from "react";
const DestinationCard = ({ image, title, location, className = "" }) => {
  return (
    <div className={`destination-card ${className}`}>
      <img src={image} alt={title} />
      <div className="image-gradient" />
      <div className="destination-info">
        <strong>{title}</strong>
        <small>{location}</small>
      </div>
      <a className="round-arrow">
        <ArrowCornerIcon />
      </a>
    </div>
  );
};
export default DestinationCard;
