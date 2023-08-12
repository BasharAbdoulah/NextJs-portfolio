import React from "react";
import ContactForm from "../ContactFrom";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="tp-contact-pg-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-10 offset-lg-1">
            <div className="office-info">
              <div className="row">
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="info-icon">
                        <i className="fi flaticon-pin"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>{t("address")}</h2>
                      <p>Kuwait</p>
                    </div>
                  </div>
                </div>
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="info-icon">
                        <i className="fi flaticon-mail"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>{t("email")}</h2>
                      <p>info@basharabdullah.com</p>
                    </div>
                  </div>
                </div>
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="info-icon">
                        <i className="fi flaticon-phone-call"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>{t("call_now")}</h2>
                      <p>+965 51177037</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-title section-title2 text-center">
              <span>{t("contact")}</span>
              <h2>{t("any_question")}</h2>
            </div>
            <div className="tp-contact-form-area">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <section className="tp-contact-map-section">
        <div className="tp-contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6954.127103729639!2d47.979027645740395!3d29.36842835111797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf84b9711a6425%3A0xf52e3f8fb4f169c7!2sMirqab%2C%20Kuwait%20City!5e0!3m2!1sen!2skw!4v1691764139158!5m2!1sen!2skw"
            width="600"
            height="450"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>{" "}
        </div>
      </section>
    </section>
  );
};

export default ContactSection;
