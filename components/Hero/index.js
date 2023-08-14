import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="home" className="hero hero-slider-wrapper hero-style-1">
      <div className="hero-slider">
        <div className="slide">
          <div className="layout"></div>
          <div className="container">
            <div className="row">
              <div className="col col-md-10 col-sm-12 slide-caption">
                <div className="slide-subtitle">
                  <h4>{t("name")}</h4>
                </div>
                <div className="slide-title">
                  <h2>Creative Developer</h2>
                </div>
                <div className="btns">
                  <AnchorLink
                    href="#contact"
                    className="template-btn go-contact-area"
                  >
                    {t("contact_me")}
                  </AnchorLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="social-links">
        <div className="overlay"></div>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/codioor/"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/bashar-abdullah-447130210/"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/BasharAbdoulah"
            >
              <i className="fa fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="white_svg">
        <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
          <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
