"use client";

import { useEffect, useState } from "react";
import {
  servicesData,
  chiffresData, 
} from "@/components/Data/service.data";
import "./service.css";
import { BsEye } from "react-icons/bs";
import Liens from "@/components/contact/liens";

export default function Service() {
  const [isVideoVisible, setIsVideoVisible] = useState(true);
  const [counts, setCounts] = useState(chiffresData.map(() => 0));

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

  useEffect(() => {
    const intervals = chiffresData.map((item, index) => {
      const increment = Math.ceil(item.number / 100); // vitesse de l'animation
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < item.number) {
            newCounts[index] = Math.min(
              newCounts[index] + increment,
              item.number
            );
          }
          return newCounts;
        });
      }, 20); // vitesse d'update (20ms)
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, []);

  return (
    <div
      className="service-bloc"
      style={{ backgroundColor: isVideoVisible ? "transparent" : "black" }}
    >
      {isVideoVisible && (
        <video autoPlay loop muted playsInline>
          <source src="/video/webp/services.webm" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
      )}
      <div className="container">
        <div className="service-grid">
          {servicesData.map((category, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                {category.icon}
                <h2>{category.topic}</h2>
              </div>
              <ul className="service-list">
                {category.details.map((detail, idx) => (
                  <li key={idx}>
                    <span className="checkmark">✔️</span> {detail}
                  </li>
                ))}
              </ul>

              {category.link && (
                <div className="service-button-wrapper">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={category.link}
                    className="service-button"
                  >
                    <BsEye style={{ marginRight: "0.5rem" }} /> Nos projets
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="chiffres-section">
        <h2 className="chiffres-title">Nos chiffres clés</h2>
        <div className="chiffres-grid">
          {chiffresData.map((item, index) => (
            <div key={index} className="chiffre-item">
              <h3 className="chiffre-number">
                {counts[index]}
                {item.isPercentage && "%"}
              </h3>
              <p className="chiffre-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      <Liens />
    </div>
  );
}
