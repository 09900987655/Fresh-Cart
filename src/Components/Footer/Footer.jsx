import React from "react";
import { useLocation } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  const location = useLocation();
  const hideFooterRoutes = ['/', '/Register', '/forgetpassword', '/restPassword'];
  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);

  if (!shouldShowFooter) return null;

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-4">
              <h5 className="footer-title">Get The FreshCart App</h5>
              <p className="footer-subtitle">
                We will send you a link, open it on your phone to download the app
              </p>
              <div className="input-button-container">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="btn-share">Share App Link</button>
              </div>
            </div>

            <div className="col-md-2">
              <h6 className="footer-title">Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#cart">Cart</a>
                </li>
                <li>
                  <a href="#wishlist">WishList</a>
                </li>
                <li>
                  <a href="#brands">Brands</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h6 className="footer-title">Customer Service</h6>
              <ul className="footer-links">
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
                <li>
                  <a href="#privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="#terms">Terms & Conditions</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h6 className="footer-title">Follow Us</h6>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/ibrahim.essam.9469"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link facebook"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="https://github.com/zoseribrahiim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link github"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/ibrahim-ahmed-33191a276/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href="#twitter"
                  className="social-link twitter"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; 2026 FreshCart. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="payment-methods">
                <i className="fa-brands fa-cc-visa"></i>
                <i className="fa-brands fa-cc-mastercard"></i>
                <i className="fa-brands fa-cc-paypal"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

