"use client";

import { JSX } from "react";
import {
  BsCameraFill,
  BsLinkedin,
  BsGithub,
  BsFacebook,
  BsLaptopFill,
  BsPhoneFill,
} from "react-icons/bs";

export interface ServiceInfo {
  icon: JSX.Element;
  topic: string;
  link: string;
  details: string[];
}

export const servicesData: ServiceInfo[] = [
  {
    icon: <BsCameraFill className="service-icon" />,
    topic: "Multimedia",
    link: "",
    details: [
      "Captation d'événements (concerts, conférences, etc.)",
      "Vidéos institutionnelles pour entreprises",
      "Réalisation de vidéos promotionnelles et publicitaires",
      "Création de films, séries, documentaires",
      "Création de clips musicaux",
    ],
  },
  {
    icon: <BsLaptopFill className="service-icon" />,
    topic: "Création sites web",
    link: "https://trofel.vercel.app/#works",
    details: [
      "Applications web : sites vitrines, sites sur-mesures, etc",
      "Analyse de vos besoins",
      "Mise en place du cahier de charge",
      "Réalisation des Maquettes/Prototypes",
      "Livraison au delai convenu",
      "Deployement et Maintenance",
    ],
  },
  {
    icon: <BsPhoneFill className="service-icon" />,
    topic: "Développement d'application",
    link: "https://trofel.vercel.app/#works",
    details: [
      "Applications mobile : Android et iOS",
      "Logiciels Windows : desktop et laptop",
      "Analyse de vos besoins",
      "Mise en place du cahier de charge",
      "Réalisation des Maquettes/Prototypes",
      "Livraison au delai convenu",
      "Installation et Maintenance",
    ],
  },
];

export const chiffresData = [
  { number: 5, label: "Années d'expérience" },
  { number: 3, label: "Partenaires Commercials" },
  { number: 96, label: "Projets réalisées" },
  { number: 97.8, label: "De clients satisfaits", isPercentage: true },
];

export const socialLinksData = [
  {
    icon: <BsLinkedin />,
    link: "https://www.linkedin.com/in/lefort-nomenjanahary-nuno-07a77b339/",
    label: "LinkedIn",
  },
  {
    icon: <BsFacebook />,
    link: "https://www.facebook.com/profile.php?id=100092364211179",
    label: "Facebook",
  },
  {
    icon: <BsGithub />,
    link: "https://github.com/lefortnuno",
    label: "GitHub",
  },
];
