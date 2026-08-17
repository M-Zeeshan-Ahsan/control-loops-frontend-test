import ActivityCard from "../ActivityCard/ActivityCard";
import "./TourActivities.css";
import React from "react";
import adventureIcon from "../../../assets/images/adventure.svg";
import hikingIcon from "../../../assets/images/hiking.svg";
import romanticIcon from "../../../assets/images/romantic.svg";
import cultureIcon from "../../../assets/images/culture.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
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
  {
    title: "Adventure 2",
    icon: adventureIcon,
  },
  {
    title: "Hiking 2",
    icon: hikingIcon,
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

        {/* <div className="activities-grid">
          {activities.map(({ title, icon }) => (
            <ActivityCard key={title} title={title} icon={icon} />
          ))}
        </div> */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {activities.map(({ title, icon }) => (
            <SwiperSlide key={title}>
              <ActivityCard title={title} icon={icon} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default TourActivities;
