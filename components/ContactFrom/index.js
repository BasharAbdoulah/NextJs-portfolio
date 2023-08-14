import React, { Component, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [lastname, setLastname] = useState("");
  const [events, setEvents] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState({ name: "", email: "", subject: "" });

  function sendEmail(e) {
    console.log("sendedd");
    e.preventDefault();

    var params = {
      name: name,
      email: email,
      message: message,
      phone: subject,
    };

    const serviceId = "service_eb1tqdq";
    const templateId = "template_6fawgul";
    const publicKey = "BizWW2M3vza_jyiN0";

    emailjs.send(serviceId, templateId, params, publicKey).then((res) => {
      setEmail("");
      setName("");
      setMessage("");
      setSubject("");
    });
  }

  const { t } = useTranslation();

  return (
    <form onSubmit={sendEmail} className="form">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-field">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              required
              placeholder={t("name_label")}
            />
            <p>{error.name ? error.name : ""}</p>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-field">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              required
              placeholder={t("email_label")}
            />
            <p>{error.email ? error.email : ""}</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-field">
            <input
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              type="text"
              name="phoneNumber"
              required
              placeholder={t("subject_label")}
            />
            <p>{error.subject ? error.subject : ""}</p>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-field">
            <textarea
              name="message"
              placeholder={t("message_label")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-submit">
            <button type="submit" className="template-btn">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ContactForm;
