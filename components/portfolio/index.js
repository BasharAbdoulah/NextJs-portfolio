import React, { useState } from "react";
import Link from "next/link";
import PortfolioSingle from "../portfolioSingle";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import amazonImg1 from "../../public/Images/protfolio/amazonClone/AMAZON.png";
import amazonImg2 from "../../public/Images/protfolio/amazonClone/4.png";
import amazonImg3 from "../../public/Images/protfolio/amazonClone/5.png";
import prettyImg1 from "../../public/Images/protfolio/prettyPets/PRETTYPETS.png";
import prettyImg2 from "../../public/Images/protfolio/prettyPets/4.png";
import prettyImg3 from "../../public/Images/protfolio/prettyPets/5.png";
import limousine1 from "../../public/Images/protfolio/lemousineService/LIMOUSINE.png";
import limousine2 from "../../public/Images/protfolio/lemousineService/4.png";
import limousine3 from "../../public/Images/protfolio/lemousineService/5.png";

const Portfolio = () => {
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

  console.log(state);

  const portfolio = [
    {
      Id: "1",
      heading: t("project_1_title"),
      subHeading: t("project_1_subT"),
      authorName: "",
      value: "$500",
      date: "Aug 2023",
      videosId: "LUSa3yRTB9A",
      pImg1: amazonImg1,
      pImg2: amazonImg2,
      pImg3: amazonImg3,
      link: "https://profound-sunshine-c5249d.netlify.app/",
      vedio: "",
      des: t("project_1_desc"),
    },
    {
      Id: "2",
      heading: t("project_2_title"),
      subHeading: t("project_2_subT"),
      authorName: "",
      value: "$400",
      date: "Jan 2022",
      videosId: "r_hYR53r61M",
      pImg1: prettyImg1,
      pImg2: prettyImg2,
      pImg3: prettyImg3,
      link: "https://magnificent-jelly-cbd6f7.netlify.app/",
      vedio: "",
      des: t("project_2_desc"),
    },
    {
      Id: "3",
      heading: t("project_3_title"),
      subHeading: t("project_3_subT"),
      authorName: "Lemousine Comapny, co",
      value: "$900",
      date: "12 Dec 2023",
      videosId: "LUSa3yRTB9A",
      pImg1: limousine1,
      pImg2: limousine2,
      pImg3: limousine3,
      link: "https://limousine-service.vercel.app/",
      vedio: "",
      des: t("project_3_desc"),
    },
  ];

  return (
    <div className="tp-protfolio-area section-padding">
      <div className="container">
        <div className="col-12">
          <div className="section-title text-center">
            <span>{t("portfolio_title")}</span>
            <h2>{t("latest_pr")}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tp-protfolio-item">
              <div className="row">
                {portfolio.map((port, prt) => (
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 custom-grid"
                    key={prt}
                  >
                    <div className="">
                      <div className="tp-protfolio-single">
                        <div className="tp-protfolio-img">
                          <Image
                            width={383}
                            height={383}
                            src={port.pImg1}
                            alt="Project Img"
                          />
                        </div>
                        <div className="tp-protfolio-text">
                          <h2>{port.heading}</h2>
                          <span>{port.subHeading}</span>
                          <button onClick={() => handleClickOpen(port)}>
                            {t("show_pr")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <PortfolioSingle
        open={open}
        onClose={handleClose}
        title={state.heading}
        doc={state.des}
        link={state.link}
        image1={state.pImg1?.src}
        image2={state.pImg2?.src}
        image3={state.pImg3?.src}
        authorName={state.authorName}
        // videosId={state.videosId}
        // value={state.value}
        date={state.date}
      />

      <div className="white_svg svg_white">
        <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
          <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
