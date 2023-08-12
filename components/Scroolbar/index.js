import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Scrollbar = () => {
  return (
    <div className="col-lg-12">
      <div className="header-menu">
        <ul className="d-flex smothscroll">
          <li className="">
            <AnchorLink
              style={{
                margin: "0 20px",
                background: "transparent",
                border: "none",
                opacity: "0.8",
              }}
              href="https://wa.link/mucoyi"
              target="_blank"
              className="d-flex justify-content-center align-items-center"
            >
              <img src="images/social.png" />
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#home">
              <i className="fi flaticon-up-arrow"></i>
            </AnchorLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Scrollbar;
