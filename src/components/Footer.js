import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main-footer">
      <hr />
      <div className="footer-top">
        <div className="message">Say Hello</div>
        <div className="links">
          <div className="link">
            <p>
              <a
                data-text="wa.me/oluwaseyi"
                href="https://wa.me/+2348171265376"
                target="_blank"
                rel="noopener noreferrer"
              >
                wa.me/oluwaseyi
              </a>
            </p>
            <p>
              <a
                data-text="oluwadareseyii@gmail.com"
                href="mailto:oluwadareseyii@gmail.com"
              >
                oluwadareseyii@gmail.com
              </a>
            </p>
          </div>
          <div className="link">
            <p>
              <a
                data-text="Blog"
                href="https://dev.to/oluwadareseyi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </p>

            <p>
              <Link data-text="Resume" to="/about">
                Resume
              </Link>
            </p>

            <p>
              <Link data-text="Contact" to="/contact">
                Contact
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© Oluwadare Oluwaseyi 2020</div>
    </footer>
  );
};

export default Footer;
