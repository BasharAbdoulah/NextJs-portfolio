import React, { Fragment } from "react";
import { Dialog, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

const PortfolioSingle = ({
  maxWidth,
  open,
  onClose,
  title,
  doc,
  image1,
  image2,
  image3,
  authorName,
  videosId,
  link,
  value,
  date,
}) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        className="modalWrapper quickview-dialog"
        maxWidth={maxWidth}
      >
        <Grid className="modalBody modal-body">
          <button className="modal-close" onClick={onClose}>
            <i className="fa fa-close"></i>
          </button>
          <div className="tp-project-details-area">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-minimal-wrap">
                  <div className="tp-minimal-img">
                    <img src={image1} alt="" />
                  </div>
                  <h2 className="d-flex align-items-center">
                    {title}{" "}
                    <a
                      target="_blank"
                      href={link}
                      className="btn link btn-outline-light"
                    >
                      Demo
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi  bi-link"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                        <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                      </svg>
                    </a>
                  </h2>
                </div>
                <div className="tp-project-details-list">
                  <div className="row">
                    <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                      <div className="tp-project-details-text">
                        <span>{t("client_name")}</span>
                        <h2>{authorName}</h2>
                      </div>
                    </div>

                    <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                      <div className="tp-project-details-text">
                        <span>{t("date")}</span>
                        <h2>{date}</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tp-p-details-section">
                  <p>{doc}</p>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-12">
                      <div className="tp-p-details-img">
                        <img src={image2} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12">
                      <div className="tp-p-details-img">
                        <img src={image3} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tp-p-details-quote">
                  <p>
                    Sure there isn't anything embarrassing hidden in the middle
                    of text. All the Lorem Ipsum generators on the Internet tend
                    to repeat predefined chunks as necessary net Essential book
                    for you.{" "}
                  </p>
                  <span>{authorName}</span>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Dialog>
    </Fragment>
  );
};
export default PortfolioSingle;
