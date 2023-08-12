import React, { Component, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { setCookie, getCookie } from "cookies-next";

const Header = () => {
  const [isOpen, setIsOpen] = useState();
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    if (i18n.language === "ar") {
      i18n.changeLanguage("en");
      changeDir(false);
    } else if (i18n.language === "en") {
      i18n.changeLanguage("ar");
      changeDir(true);
    }
  };

  const changeDir = (isAR) => {
    const hElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const pElements = document.querySelectorAll("p");

    if (isAR) {
      hElements.forEach((item) => {
        item.style.direction = "rtl";
      });
      pElements.forEach((item) => {
        item.style.direction = "rtl";
      });
    } else {
      hElements.forEach((item) => {
        item.style.direction = "ltr";
      });
      pElements.forEach((item) => {
        item.style.direction = "ltr";
      });
    }
  };

  return (
    <header id="header" className="site-header header-style-1">
      <nav className="navigation navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="open-btn"
              onClick={() => setIsOpen(true)}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="home">
              <img src="images/logo.png" alt="" />
            </Link>
          </div>
          <div
            id="navbar"
            className={
              isOpen
                ? "navbar-collapse navigation-holder active"
                : "navbar-collapse navigation-holder"
            }
          >
            <button className="close-navbar" onClick={() => setIsOpen(false)}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <button className="close-navbar-2" onClick={() => setIsOpen(false)}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <ul className="nav navbar-nav">
              <div className="navbar-header">
                <Link className="navbar-brand" to="home">
                  <img src="images/logo.png" alt="" />
                </Link>
              </div>
              <li className="home">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {t("nav_home")}
                </Link>
              </li>
              <li className="about">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {t("nav_about")}
                </Link>
              </li>
              <li className="service">
                <Link
                  activeClass="active"
                  to="service"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {t("nav_services")}
                </Link>
              </li>
              <li className="protfolio">
                <Link
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {t("nav_portfolio")}
                </Link>
              </li>
              <li className="pricing">
                <Link
                  activeClass="active"
                  to="pricing"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {t("nav_pricing")}
                </Link>
              </li>
              {/* <li className="blog">
                                    <Link activeClass="active" to="blog" spy={true} smooth={true} duration={500}>Blog</Link>
                                </li> */}
              <li className="contact">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {t("nav_contact")}
                </Link>
              </li>
              <li className="lang_btn" onClick={() => changeLanguage()}>
                EN/عربي
              </li>
            </ul>
          </div>
          <div className="menu-open-btn-holder">
            <button className="menu-open-btn" onClick={() => setIsOpen(true)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
