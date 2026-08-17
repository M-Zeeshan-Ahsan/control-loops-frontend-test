import React from "react";
import "./ActivityCard.css";
const ActivityCard = ({ icon, title }) => {
  return (
    <a className="activity-card">
      <div className="activity-icon">
        <img src={icon} alt="" />
      </div>
      <span>{title}</span>
    </a>
  );
};
export default ActivityCard;
