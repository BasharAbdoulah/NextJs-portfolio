import React, { useState } from "react";
import ServiceSingle from "../ServiceSingle";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const Service = () => {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();

  function handleClose() {
    setOpen(false);
  }

  const [state, setState] = useState({});

  const handleClickOpen = (item) => {
    setOpen(true);
    setState(item);
  };
  const service = [
    {
      Id: "1",

      sIcon: "fi flaticon-laptop",
      heading: t("service_1_title"),
      Simg1: "images/service-single/web-design/img-1.jpg",
      Simg2: "images/service-single/web-design/img-2.jpg",
      Simg3: "images/service-single/web-design/img-3.jpg",
      des: t("service_1_desc"),
    },
    {
      Id: "2",
      sIcon: "fi flaticon-web-design",
      heading: t("service_2_title"),
      Simg1: "images/service-single/development/img-1.jpg",
      Simg2: "images/service-single/development/img-2.jpg",
      Simg3: "images/service-single/development/img-3.jpg",
      des: t("service_2_desc"),
    },
    {
      Id: "3",
      sIcon: "fi flaticon-paint-palette",
      heading: t("service_3_title"),
      Simg1: "images/service-single/creative/img-1.jpg",
      Simg2: "images/service-single/creative/img-2.jpg",
      Simg3: "images/service-single/creative/img-3.jpg",
      des: t("service_3_desc"),
    },
    {
      Id: "4",
      sIcon: "fi flaticon-smartphone",
      heading: t("service_4_title"),
      Simg1: "images/service-single/responsive/img-1.jpg",
      Simg2: "images/service-single/responsive/img-2.jpg",
      Simg3: "images/service-single/responsive/img-3.jpg",
      des: t("service_4_desc"),
    },
    {
      Id: "5",
      sIcon: "fi flaticon-verified",
      heading: t("service_5_title"),
      Simg1: "images/service-single/branding/img-1.jpg",
      Simg2: "images/service-single/branding/img-2.jpg",
      Simg3: "images/service-single/branding/img-3.jpg",
      des: t("service_5_desc"),
    },
  ];

  return (
    <div id="service" className="service-area section-padding">
      <div className="borderd"></div>
      <div className="container">
        <div className="col-l2">
          <div className="section-title section-title2 text-center">
            <span>{t("what_ido")}</span>
            <h2>{t("my_services")}</h2>
          </div>
        </div>
        <div className="row">
          {service.map((serv, srv) => (
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12" key={srv}>
              <div className="service-section">
                <div className="services-wrapper">
                  <div className="services-icon-wrapper">
                    <div className="service-dot">
                      <div className="dots"></div>
                      <div className="dots2"></div>
                    </div>
                    <i className={serv.sIcon}></i>
                  </div>
                  <div className="service-content">
                    <h2>{serv.heading}</h2>
                    <p>{serv.des}</p>
                    <a
                      className="btn"
                      // onClick={() => handleClickOpen(serv)}
                      href="#contact"
                    >
                      {t("learn_more")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="white_svg">
        <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
          <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
        </svg>
      </div>
      <ServiceSingle
        open={open}
        onClose={handleClose}
        title={state.heading}
        doc={state.doc}
        image1={state.Simg1}
        image2={state.Simg2}
        image3={state.Simg3}
      />
    </div>
  );
};
export default Service;
