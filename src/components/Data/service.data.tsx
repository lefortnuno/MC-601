"use client";

import { JSX } from "react";
import { BsCameraFill, BsCameraReelsFill, BsLaptopFill } from "react-icons/bs";

export interface ServiceInfo {
  icon: JSX.Element;
  topic: string;
  details: string[];
}

export const servicesData: ServiceInfo[] = [
  {
    icon: <BsCameraFill className="service-icon" />,
    topic: "Photographie",
    details: ["Captation d'événements (concerts, conférences, etc.)"],
  },
  {
    icon: <BsCameraReelsFill className="service-icon" />,
    topic: "Vidéaste",
    details: [
      "Vidéos institutionnelles pour entreprises",
      "Réalisation de vidéos promotionnelles et publicitaires",
      "Création de films, séries, documentaires",
      "Création de clips musicaux",
    ],
  }, 
  {
    icon: <BsLaptopFill className="service-icon" />,
    topic: "Développeur",
    details: [ 
      "Applications web : sites vitrines, sites gestions, etc",
      "Applications mobile : Android et iOS",
      "Logiciels Windows : desktop et laptop",
    ],
  },
];
