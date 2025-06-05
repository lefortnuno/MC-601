"use client";

import { JSX } from "react";
import {
  BsCameraReelsFill,
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
    icon: <BsCameraReelsFill className="service-icon" />,
    topic: "Multimedia",
    link: "https://www.youtube.com/@MASOANDROCAPITAL",
    details: [
      // "Captation d'événements (concerts, conférences, etc.)",
      // "Vidéos institutionnelles pour entreprises",
      // "Réalisation de vidéos promotionnelles et publicitaires",
      // "Création de films, séries, documentaires",
      // "Création de clips musicaux",
    ],
  },
  {
    icon: <BsLaptopFill className="service-icon" />,
    topic: "Création sites web",
    link: "https://trofel.vercel.app/#works",
    details: [
      // "Applications web : sites vitrines, sites sur-mesure, etc",
      // "Analyse de vos besoins",
      // "Mise en place du cahier des charges",
      // "Réalisation des Maquettes/Prototypes",
      // "Livraison au délai convenu",
      // "Déploiement et Maintenance",
    ],
  },
  {
    icon: <BsPhoneFill className="service-icon" />,
    topic: "Développement d'application",
    link: "https://trofel.vercel.app/#works",
    details: [
      // "Applications mobiles : Android et iOS",
      // "Logiciels Windows : desktop et laptop",
      // "Analyse de vos besoins",
      // "Mise en place du cahier des charges",
      // "Réalisation des Maquettes/Prototypes",
      // "Livraison au délai convenu",
      // "Installation et Maintenance",
    ],
  },
];

export const chiffresData = [
  { number: 7, label: "Années d'expérience" },
  { number: 3, label: "Partenaires commerciaux" },
  { number: 96, label: "Projets réalisés" },
  { number: 98.7, label: "De clients satisfaits", isPercentage: true },
];

export const socialLinksData = [
  {
    icon: <BsLinkedin />,
    link: "https://www.linkedin.com/in/lefort-nomenjanahary-nuno-07a77b339/",
    label: "LinkedIn",
  },
  {
    icon: <BsFacebook />,
    link: "https://www.facebook.com/profile.php?id=100092114410441",
    label: "Facebook",
  },
  {
    icon: <BsGithub />,
    link: "https://github.com/lefortnuno",
    label: "GitHub",
  },
];
