import DestinationCard from "../DestinationCard/DestinationCard";
import "./PopularDestinations.css";
import React from "react";

const destinations = [
  {
    title: "Kelingking Beach",
    location: "Nusa Penida, Bali",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Grand Palace",
    location: "Bangkok, Thailand",
    image:
      "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Cappadocia",
    location: "Turkey",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Padar Island",
    location: "East Nusa Tenggara",
    image:
      "https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&w=1200&q=85",
  },
];

const PopularDestinations = () => {
  return (
    <div className="destinations-section" id="destination">
      <div className="container">
        <div className="section-heading">
          <span>Packages</span>
          <h2>Popular Destinations</h2>
        </div>

        <div className="destination-grid">
          <DestinationCard {...destinations[0]} className="destination-large" />
          <DestinationCard {...destinations[1]} />
          <DestinationCard {...destinations[2]} />
          <DestinationCard {...destinations[3]} className="destination-wide" />
        </div>
      </div>
    </div>
  );
};
export default PopularDestinations;
