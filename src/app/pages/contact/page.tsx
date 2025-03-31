"use client";

import { useEffect, useState } from "react";
import { BsSend } from "react-icons/bs";
import "./contact.css";
import { contactDetails } from "@/components/Data/contact.data";

export default function Contact() {
  const [isVideoVisible, setIsVideoVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsVideoVisible(window.innerWidth > 680);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="contact-bloc"
      style={{ backgroundColor: isVideoVisible ? "transparent" : "black" }}
    >
      {isVideoVisible && (
        <video autoPlay loop muted playsInline>
          <source src="/video/webp/watersky-corporation.webm" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
      )}
      <div className="contact-container">
        <div className="contact-content">
          <div className="left-side">
            {contactDetails.map((item, index) => (
              <div key={index} className="details">
                <div>{item.icon}</div>
                <div className="topic">{item.topic}</div>
                {item.details.map((text, i) => (
                  <div key={i} className="text-one">
                    {text}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="right-side">
            <div className="topic-text">Envoyez nous un message</div>
            <p>
              Si vous avez du travail de ma part ou tout type de questions liées
              à Mon profil, vous pouvez m’envoyer un message d’ici. Ce sera avec
              plaisir de vous aider.
            </p>
            <form action="#">
              <div className="input-box">
                <input
                  type="text"
                  name="fake-name"
                  placeholder="Entrez votre nom "
                  autoComplete="off"
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="fake-email"
                  placeholder="Entrez votre adresse email"
                  autoComplete="off"
                />
              </div>
              <div className="input-box message-box">
                <textarea placeholder="Veuillez nous faire part de votre message"></textarea>
              </div>
              <div className="button">
                <button type="submit">
                  Envoyer <BsSend />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
