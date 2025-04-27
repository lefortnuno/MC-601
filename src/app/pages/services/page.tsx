"use client";

import { useEffect, useState } from "react";
import { servicesData } from "@/components/Data/service.data";
import "./service.css"; 

export default function Service() {
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
                    <span className="checkmark">
                      ✔️ 
                    </span>{" "}
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
