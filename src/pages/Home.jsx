import React from "react";
import Navbar from "../components/layout/Navbar/Navbar";
import Hero from "../components/hero/Hero/Hero";
import PopularDestinations from "../components/destinations/PopularDestinations/PopularDestinations";
import TourActivities from "../components/activities/TourActivities/TourActivities";
import TravelChoices from "../components/travel/TravelChoices/TravelChoices";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularDestinations />
      <TourActivities />
      <TravelChoices />
    </>
  );
};

export default Home;
