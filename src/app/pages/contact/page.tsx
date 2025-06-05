"use client";

import { useState } from "react";
import { BsSend } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { contactDetails } from "@/components/datawarehouse/contact.data";
import Liens from "@/components/sociaux/liens";
import Video from "@/components/video/Video";
import { motion } from "framer-motion";

export default function Contact() {
  const [isVideoVisible, setIsVideoVisible] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = "Nom requis";
      isValid = false;
    }
    if (!email.trim()) {
      newErrors.email = "Email requis";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email invalide";
      isValid = false;
    }
    if (!message.trim()) {
      newErrors.message = "Message requis";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    const templateParams = {
      name: name,
      email: email,
      to_email: "antoniochrystophe92@gmail.com",
      title: `${name} 🚀 Demande de contact importante !`,
      message: message,
    };

    try {
      await emailjs.send(
        "service_ulyqyh8",
        "template_ep17l2l",
        templateParams,
        "HANAVSB1mIWIvcD-i"
      );

      setName("");
      setEmail("");
      setMessage("");
      setErrors({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
      if (value.trim()) {
        setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
      }
    } else if (name === "email") {
      setEmail(value);
      if (value.trim() && /\S+@\S+\.\S+/.test(value)) {
        setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
      }
    } else if (name === "message") {
      setMessage(value);
      if (value.trim()) {
        setErrors((prevErrors) => ({ ...prevErrors, message: "" }));
      }
    }
  };

  return (
    <div
      className="contact-bloc"
      style={{ backgroundColor: isVideoVisible ? "transparent" : "black" }}
    >
      <Video
        name="watersky-corporation"
        onVisibilityChange={setIsVideoVisible}
      />

      <motion.div
        className="contact-container"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="contact-content">
          <div className="left-side">
            {contactDetails.map((item, index) => (
              <div key={index} className="details">
                <div>{item.icon}</div>
                <div className="topic">{item.topic}</div>
                {item.details.map((text, i) => (
                  <div key={i} className="text-one">
                    {text.includes("@") ? (
                      <a href={`mailto:${text}`} className="clickable">
                        {text}
                      </a>
                    ) : text.match(/^\+?\d+/) ? (
                      <a href={`tel:${text}`} className="clickable">
                        {text}
                      </a>
                    ) : (
                      text
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="right-side">
            <div className="topic-text">Envoyez-nous un message</div>
            <p>
              Agence au services de la production audiovisuelle, Notre mission ? Mettre l&apos;image au service de vos idées. 
            </p>
            <form onSubmit={handleSubmit}>
              <div className={`input-box ${errors.name ? "error" : ""}`}>
                <input
                  type="text"
                  placeholder="Entrez votre nom"
                  autoComplete="off"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  className={errors.name ? "error-input" : ""}
                />
                {errors.name && (
                  <span className="error-popup">{errors.name}</span>
                )}
              </div>
              <div className={`input-box ${errors.email ? "error" : ""}`}>
                <input
                  type="email"
                  placeholder="Entrez votre adresse email"
                  autoComplete="off"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className={errors.email ? "error-input" : ""}
                />
                {errors.email && (
                  <span className="error-popup">{errors.email}</span>
                )}
              </div>
              <div
                className={`input-box message-box ${
                  errors.message ? "error" : ""
                }`}
              >
                <textarea
                  placeholder="Veuillez nous faire part de votre message"
                  name="message"
                  value={message}
                  onChange={handleChange}
                  className={errors.message ? "error-input" : ""}
                ></textarea>
                {errors.message && (
                  <span className="error-popup error-popup-message">
                    {errors.message}
                  </span>
                )}
              </div>
              <div className="button">
                <button type="submit" disabled={loading}>
                  {loading ? "Envoi..." : "Envoyer"} <BsSend />
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>

      <Liens />
    </div>
  );
}
