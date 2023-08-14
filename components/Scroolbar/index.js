import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/image";
import wIcon from "../../public/Images/social.png";
const Scrollbar = () => {
  return (
    <div className="col-lg-12">
      <div className="header-menu">
        <ul className="d-flex smothscroll">
          <li className="">
            <a
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
              <Image width={40} height={38} alt="Whatsapp Link" src={wIcon} />
            </a>
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
