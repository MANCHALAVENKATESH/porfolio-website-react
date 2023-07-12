import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Venkatesh</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.instagram.com/m__venkat/" className="footer__social-link" target="_blank">
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="https://www.youtube.com/@infinityhacklearn1391" className="footer__social-link" target="_blank">
            <i class="bx bxl-youtube "></i>
          </a>
          <a href="https://www.linkedin.com/in/venkatesh967/" className="footer__social-link" target="_blank">
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>
        <span className="footer__copy">
            &#169;Venkatesh Manchala. All rights reserved
        </span>
      </div>
    </footer>
  );
};
export default Footer
