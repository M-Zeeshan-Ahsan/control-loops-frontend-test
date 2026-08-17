import TravelCard from "../TravelCard/TravelCard";
import "./TravelChoices.css";
import React, { useState } from "react";
const cards = [
  [
    "Phuket",
    "Myanmar",
    "40",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=85",
  ],
  [
    "Kelingking",
    "Indonesia",
    "20",
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=700&q=85",
  ],
  [
    "Mt. Bromo",
    "Indonesia",
    "35",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=700&q=85",
  ],
  [
    "Old Bagan",
    "Myanmar",
    "18",
    "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=700&q=85",
  ],
  [
    "Lobul",
    "Indonesia",
    "18",
    "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=700&q=85",
  ],
  [
    "Marina Bay",
    "Singapore",
    "24",
    "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=700&q=85",
  ],
  [
    "Mt. Fuji",
    "Japan",
    "48",
    "https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&w=700&q=85",
  ],
  [
    "Padar Island",
    "Indonesia",
    "26",
    "https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&w=700&q=85",
  ],
];
const tabs = ["destination", "accommodation", "activity"];
const TravelChoices = () => {
  const [activeTab, setActiveTab] = useState("destination");
  return (
    <section className="travel-section" id="about">
      <div className="container">
        <div className="section-heading centered travel-heading">
          <h2>
            Find Out The Best
            <br />
            Travel Choice in Asia
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            <br />
            commodo ligula eget dolor. Aenean massa.
          </p>

          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="travel-grid">
          {cards.map(([title, country, price, image]) => (
            <TravelCard
              key={title}
              title={title}
              country={country}
              price={price}
              image={image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default TravelChoices;
