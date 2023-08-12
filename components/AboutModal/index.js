import React, { Fragment } from "react";
import { Button, Dialog, Grid } from "@mui/material";
import Counter from "../Counter";
import { useTranslation } from "react-i18next";

const DefaultModal = ({ maxWidth, button, buttonClass }) => {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Fragment>
      <Button className={`btn ${buttonClass}`} onClick={handleClickOpen}>
        {button}
        {t("more_about")}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        className="modalWrapper quickview-dialog"
        maxWidth={maxWidth}
      >
        <Grid className="modalBody modal-body">
          <button className="modal-close" onClick={handleClose}>
            <i className="fa fa-close"></i>
          </button>
          <div className="skill-area section-padding">
            <div className="container">
              <div className="col-12">
                <div className="section-title text-center">
                  <h2>{t("my_skills")}</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="progress yellow">
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div className="progress-value">
                      90% <span>{t("skill_1")}</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="progress blue">
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div className="progress-value">
                      80% <span>{t("skill_2")}</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6">
                  <div className="progress pink">
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div className="progress-value">
                      65% <span>{t("skill_3")}</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="progress green">
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div className="progress-value">
                      47% <span>{t("skill_4")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Counter /> */}
        </Grid>
      </Dialog>
    </Fragment>
  );
};
export default DefaultModal;
