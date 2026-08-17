import ActivityCard from "../ActivityCard/ActivityCard";
import "./TourActivities.css";
import React from "react";
import adventureIcon from "../../../assets/images/adventure.svg";
import hikingIcon from "../../../assets/images/hiking.svg";
import romanticIcon from "../../../assets/images/romantic.svg";
import cultureIcon from "../../../assets/images/culture.svg";
const activities = [
  {
    title: "Adventure",
    icon: adventureIcon,
  },
  {
    title: "Hiking",
    icon: hikingIcon,
  },
  {
    title: "Romantic",
    icon: romanticIcon,
  },
  {
    title: "Culture",
    icon: cultureIcon,
  },
];

const TourActivities = () => {
  return (
    <section className="activities-section" id="tours">
      <div className="container activities-inner">
        <div className="section-heading centered">
          <h2>Pick A Tour Activity</h2>
          <span>Categories</span>
        </div>

        <div className="activities-grid">
          {activities.map(({ title, icon }) => (
            <ActivityCard key={title} title={title} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default TourActivities;
