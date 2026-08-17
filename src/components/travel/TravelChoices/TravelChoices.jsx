import React, { useState } from "react";
import TravelCard from "../TravelCard/TravelCard";
import "./TravelChoices.css";

const cards = [
  {
    title: "Phuket",
    country: "Myanmar",
    price: "40",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=85",
    type: "destination",
  },
  {
    title: "Kelingking",
    country: "Indonesia",
    price: "20",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=700&q=85",
    type: "destination",
  },
  {
    title: "Mt. Bromo",
    country: "Indonesia",
    price: "35",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=700&q=85",
    type: "activity",
  },
  {
    title: "Old Bagan",
    country: "Myanmar",
    price: "18",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=700&q=85",
    type: "destination",
  },
  {
    title: "Lobul",
    country: "Indonesia",
    price: "18",
    image:
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=700&q=85",
    type: "accommodation",
  },
  {
    title: "Marina Bay",
    country: "Singapore",
    price: "24",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=700&q=85",
    type: "accommodation",
  },
  {
    title: "Mt. Fuji",
    country: "Japan",
    price: "48",
    image:
      "https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&w=700&q=85",
    type: "activity",
  },
  {
    title: "Padar Island",
    country: "Indonesia",
    price: "26",
    image:
      "https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&w=700&q=85",
    type: "destination",
  },
];

const tabs = ["destination", "accommodation", "activity"];

const TravelChoices = () => {
  const [activeTab, setActiveTab] = useState("destination");

  const filteredCards = cards.filter((card) => card.type === activeTab);

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
          {filteredCards.map((card) => (
            <TravelCard
              key={card.title}
              title={card.title}
              country={card.country}
              price={card.price}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelChoices;
