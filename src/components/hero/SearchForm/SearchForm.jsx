import {
  CalendarIcon,
  MapPinIcon,
  UserIcon,
  SearchIcon,
} from "../../../assets/icons";
import "./SearchForm.css";
import React from "react";

const fields = [
  { label: "Destination", placeholder: "Where to go?", icon: MapPinIcon },
  { label: "Check in", placeholder: "Check in", icon: CalendarIcon },
  { label: "Check out", placeholder: "Check out", icon: CalendarIcon },
  { label: "Guests", placeholder: "Guests", icon: UserIcon },
];

const SearchForm = () => {
  return (
    <div className="search-panel-wrapper">
      <form
        className="search-panel"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Search submitted");
        }}
      >
        {fields.map(({ label, placeholder, icon: Icon }) => (
          <label className="search-field" key={label}>
            <span>{label}</span>
            <div>
              <input placeholder={placeholder} aria-label={label} />
              <Icon />
            </div>
          </label>
        ))}

        <button className="search-button" type="submit" aria-label="Search">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};
export default SearchForm;
