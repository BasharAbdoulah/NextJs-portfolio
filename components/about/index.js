import React from "react";
import DefaultModal from "../AboutModal";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import myimg from "../../public/Images/myimg2.webp";
import signature from "../../public/Images/signeture.png";

const About = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <section id="about" className="tp-about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 col-12">
            <div className="tp-about-wrap">
              <div className="tp-about-img">
                <Image width={400} height={400} alt="Owner Img" src={myimg} />
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-12">
            <div className="tp-about-text">
              <div className="tp-about-icon">
                <i className="fi flaticon-web-design"></i>
              </div>
              <div className="tp-about-icon-content">
                <h2>{t("title")}</h2>
                <p>{t("description")}</p>
                <div className="signeture">
                  <span>
                    <Image width={200} height={80} alt="" src={signature} />
                  </span>
                  {/* <p>Ceo Of Designlab IT</p> */}
                </div>
                <DefaultModal buttonClass={"template-btn"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="white_svg svg_white">
        <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
          <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
        </svg>
      </div>
    </section>
  );
};

export default About;
