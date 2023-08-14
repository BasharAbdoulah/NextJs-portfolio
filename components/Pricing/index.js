import React from "react";

import Link from "next/link";
import { useTranslation } from "react-i18next";

const PricingPlan = () => {
  const { t } = useTranslation();
  return (
    <section name="pricing" className="pricing-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="section-title text-center">
              <span>{t("pricing_table")}</span>
              <h2>{t("pricing")}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <div className="pricing-grids d-flex justify-content-center">
              <div className="grid">
                <div className="pricing-header">
                  <div className="circuler-price">
                    <i className="fi flaticon-verified"></i>
                  </div>
                  <p>Basic</p>
                </div>
                <div className="pricing-body">
                  <h2>
                    <sup>$</sup>500<span></span>
                  </h2>
                  <ul>
                    <li>{t("web_design")}</li>
                    <li>{t("web_dev")}</li>
                    <li>{t("host")}</li>
                    <li>{t("domain")}</li>
                    <li>{t("payment")}</li>
                  </ul>
                  <Link href="#contact" className="template-btn pri">
                    {t("order_now")}
                  </Link>
                </div>
              </div>
              <div className="grid">
                <div className="pricing-header">
                  <div className="circuler-price">
                    <i className="fi flaticon-paint-palette"></i>
                  </div>
                  <p>Standard</p>
                </div>
                <div className="pricing-body">
                  <h2>
                    <sup>$</sup>800<span></span>
                  </h2>
                  <ul>
                    <li>{t("web_design")}</li>
                    <li>{t("web_dev")}</li>
                    <li>{t("host")}</li>
                    <li>{t("domain")}</li>
                    <li>{t("support")}</li>
                    <li>{t("seo")}</li>
                    <li>{t("payment")}</li>

                    <li>{t("bus_email")}</li>
                  </ul>
                  <Link href="#contact" className="template-btn pri">
                    {t("order_now")}
                  </Link>
                </div>
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

export default PricingPlan;
