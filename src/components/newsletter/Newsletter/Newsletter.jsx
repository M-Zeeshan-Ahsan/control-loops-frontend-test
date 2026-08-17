import mailicon from "../../../assets/images/mail.svg";
import "./Newsletter.css";
import React from "react";
const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter">
          <div className="newsletter-heading">
            <span>Let's Explore the World</span>
            <h2>Get Special Offers in Your Inbox</h2>
          </div>
          <form
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for subscribing!");
            }}
          >
            <input
              type="email"
              required
              placeholder="Submit your email"
              aria-label="Email"
            />
            <button type="submit" aria-label="Subscribe">
              <img src={mailicon} alt="" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
