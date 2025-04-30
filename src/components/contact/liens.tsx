"use client";

import "./liens.css";
import { socialLinksData } from "../datawarehouse/service.data";

export default function Liens() {
  return (
    <div className="social-links">
      {socialLinksData.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label={social.label}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
