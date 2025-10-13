import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-success text-white pt-4 pb-2 mt-5">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          {/* Brand Section */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h4 className="fw-bold fst-italic">Khamma Ghani</h4>
            <p className="small mb-0">
              Taste the royal flavors of Rajasthan — made with love and tradition.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-4 mb-3 mb-md-0">
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-start gap-4 mb-0">
              <li><Link className="text-white text-decoration-none" to="/">Home</Link></li>
              <li><Link className="text-white text-decoration-none" to="/about">About</Link></li>
              <li><Link className="text-white text-decoration-none" to="/myorder">My Orders</Link></li>
              <li><Link className="text-white text-decoration-none" to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="col-md-4">
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-end gap-3 mb-0">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white fs-5">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white fs-5">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white fs-5">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white fs-5">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-light opacity-25 my-3" />

        {/* Copyright */}
        <div className="text-center small text-white-50">
          © 2025 <span className="fw-semibold">Khamma Ghani</span> — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
