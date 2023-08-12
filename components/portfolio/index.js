import React, { useState } from "react";
import Link from "next/link";
import PortfolioSingle from "../portfolioSingle";
import { useTranslation } from "react-i18next";

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

  const portfolio = [
    {
      Id: "1",
      heading: t("project_1_title"),
      subHeading: t("project_1_subT"),
      authorName: "",
      value: "$500",
      date: "Aug 2023",
      videosId: "LUSa3yRTB9A",
      pImg1: "images/protfolio/amazonClone/AMAZON.png",
      pImg2: "images/protfolio/amazonClone/4.png",
      pImg3: "images/protfolio/amazonClone/5.png",
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
      pImg1: "images/protfolio/prettyPets/PRETTYPETS.png",
      pImg2: "images/protfolio/prettyPets/4.png",
      pImg3: "images/protfolio/prettyPets/5.png",
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
      pImg1: "images/protfolio/lemousineService/LIMOUSINE.png",
      pImg2: "images/protfolio/lemousineService/5.png",
      pImg3: "images/protfolio/lemousineService/4.png",
      link: "https://limousine-service.vercel.app/",
      vedio: "",
      des: t("project_3_desc"),
    },
    {
      Id: "4",
      heading: "Modern BG",
      subHeading: "Illustration . Art Direction",
      authorName: "Lily Aney",
      value: "$800",
      date: "09 Jan 2021",
      videosId: "r_hYR53r61M",
      pImg1: "images/protfolio/modern/img-1.jpg",
      pImg2: "images/protfolio/modern/img-2.jpg",
      pImg3: "images/protfolio/modern/img-3.jpg",
      vedio: "",
      des: "Modern BG, Landing Page Design, App development, Mobile an Website Design an expert web designer and developer. Contrary to popular belief Lorem Ipsum is not simply random text. It has Design,",
    },
    {
      Id: "5",
      heading: "Visual Design",
      subHeading: "Illustration . Art Direction",
      authorName: "Aliza mart",
      value: "$1000",
      date: "06 Jan 2021",
      videosId: "LUSa3yRTB9A",
      pImg1: "images/protfolio/visual/img-1.jpg",
      pImg2: "images/protfolio/visual/img-2.jpg",
      pImg3: "images/protfolio/visual/img-3.jpg",
      vedio: "",
      des: "Visual Design, Landing Page Design, App development, Mobile an Website Design an expert web designer and developer. Contrary to popular belief Lorem Ipsum is not simply random text. It has Design,",
    },
    {
      Id: "5",
      heading: "Product Design",
      subHeading: "Illustration . Art Direction",
      authorName: "Martin Gaptil",
      value: "$1200",
      date: "03 Jan 2021",
      videosId: "r_hYR53r61M",
      pImg1: "images/protfolio/pdesign/img-1.jpg",
      pImg2: "images/protfolio/pdesign/img-2.jpg",
      pImg3: "images/protfolio/pdesign/img-3.jpg",
      vedio: "",
      des: "Product Design, Landing Page Design, App development, Mobile an Website Design an expert web designer and developer. Contrary to popular belief Lorem Ipsum is not simply random text. It has Design,",
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
                          <img src={port.pImg1} alt="" />
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
        image1={state.pImg1}
        image2={state.pImg2}
        image3={state.pImg3}
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
