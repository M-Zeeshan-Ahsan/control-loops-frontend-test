import React from "react";
import Navbar from "../components/layout/Navbar/Navbar";
import Hero from "../components/hero/Hero/Hero";
import PopularDestinations from "../components/destinations/PopularDestinations/PopularDestinations";
import TourActivities from "../components/activities/TourActivities/TourActivities";
import TravelChoices from "../components/travel/TravelChoices/TravelChoices";
import Newsletter from "../components/newsletter/Newsletter/Newsletter";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularDestinations />
      <TourActivities />
      <TravelChoices />
      <Newsletter />
    </>
  );
};

export default Home;
