"use client";

import { useEffect, useRef, useState } from "react";
import {
  servicesData,
  chiffresData,
} from "@/components/datawarehouse/service.data";
import "./service.css";
import Liens from "@/components/contact/liens";
import Video from "@/components/video/Video";

export default function Service() {
  const [isVideoVisible, setIsVideoVisible] = useState(true);

  const [counts, setCounts] = useState(chiffresData.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const chiffresRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    if (chiffresRef.current) observer.observe(chiffresRef.current);

    return () => {
      if (chiffresRef.current) observer.unobserve(chiffresRef.current);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const intervals = chiffresData.map((item, index) => {
      const increment = Math.ceil(item.number / 100);
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
      }, 20);
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, [hasAnimated]);

  return (
    <div
      className="service-bloc"
      style={{ backgroundColor: isVideoVisible ? "transparent" : "black" }}
    >
      <Video name="services" onVisibilityChange={setIsVideoVisible} />

      <div className="container">
        <div className="service-grid">
          {servicesData.map((category, index) => (
            <a
              key={index}
              className="service-card"
              href={category.link}
              target="_blank"
              rel="noopener noreferrer"
              title="Nos projets"
            >
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

              {/* {category.link && (
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
              )} */}
            </a>
          ))}
        </div>
      </div>

      <div className="chiffres-section" ref={chiffresRef}>
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
