import React from "react";
import {
  CalendarIcon,
  MapPinIcon,
  UserIcon,
  SearchIcon,
} from "../../../assets/icons";
import "./SearchForm.css";

const fields = [
  {
    label: "Destination",
    placeholder: "Where to go?",
    icon: MapPinIcon,
    type: "text",
  },
  {
    label: "Check in",
    placeholder: "Check in",
    icon: CalendarIcon,
    type: "date",
  },
  {
    label: "Check out",
    placeholder: "Check out",
    icon: CalendarIcon,
    type: "date",
  },
  {
    label: "Guests",
    placeholder: "Guests",
    icon: UserIcon,
    type: "number",
  },
];

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Search submitted");
  };

  const handleDateIconClick = (e) => {
    const input = e.currentTarget.parentElement.querySelector("input");

    if (input?.showPicker) {
      input.showPicker();
    } else {
      input?.focus();
    }
  };

  return (
    <div className="search-panel-wrapper">
      <form className="search-panel" onSubmit={handleSubmit}>
        {fields.map(({ label, placeholder, icon: Icon, type }) => (
          <label className="search-field" key={label}>
            <span>{label}</span>

            <div className="search-input-wrapper">
              <input
                type={type}
                placeholder={type === "date" ? undefined : placeholder}
                aria-label={label}
              />

              {type === "date" ? (
                <button
                  type="button"
                  className="search-icon-button"
                  onClick={handleDateIconClick}
                  aria-label={`Select ${label}`}
                >
                  <Icon />
                </button>
              ) : (
                <Icon />
              )}
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
