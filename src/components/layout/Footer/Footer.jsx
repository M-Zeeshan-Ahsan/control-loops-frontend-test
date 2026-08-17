import "./Footer.css";
import React from "react";
import {
  FacebookIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../../assets/icons";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="footer-logo" href="#home">
            <span>CMS</span> Travelers
          </a>
          <div className="footer-contact">
            <p>
              <MapPinIcon /> Awesome Road, New York, USA
            </p>
            <p>
              <PhoneIcon /> +123 456 78900
            </p>
            <p>
              <MailIcon /> hello@travelo.com
            </p>
          </div>
          <div className="socials">
            <a className="facebook" href="">
              <FacebookIcon />
            </a>

            <a className="twitter" href="">
              <TwitterIcon />
            </a>

            <a className="linkedin" href="">
              <LinkedinIcon />
            </a>

            <a className="youtube" href="">
              <YoutubeIcon />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Top Destination</h4>
          <a href="">New York</a>
          <a href="">London</a>
          <a href="">Rome</a>
          <a href="">Moscow</a>
          <a href="a">Dhaka</a>
        </div>

        <div className="footer-column">
          <h4>Useful Links</h4>
          <a href="">About Us</a>
          <a href="">Company Profile</a>
          <a href="">Team Members</a>
          <a href="t">Support</a>
          <a href="">Career</a>
        </div>

        <div className="footer-column hot-package">
          <h4>Hot Travel Package</h4>
          <a href="" className="package-item">
            <img
              src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=180&q=80"
              alt="Travel package"
            />
            <span>
              Adventure trip to Amazon
              <br />
              <small>
                Starts from <span>$199</span>
              </small>
            </span>
          </a>
          <a href="" className="package-item">
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=180&q=80"
              alt="Travel package"
            />
            <span>
              Adventure trip to Amazon
              <br />
              <small>
                Starts from <span>$199</span>
              </small>
            </span>
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>Terms &amp; Condition</span>
        <span>Privacy Policy</span>
        <span>Legal</span>
      </div>
    </footer>
  );
}
