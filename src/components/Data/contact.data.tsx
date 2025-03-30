export interface ContactInfo {
    icon: JSX.Element;
    topic: string;
    details: string[];
  }
  
import { JSX } from "react";
  import { BsGeoAltFill, BsTelephoneFill, BsEnvelopeFill } from "react-icons/bs";
  
  export const contactDetails: ContactInfo[] = [
    {
      icon: <BsGeoAltFill className="contact-icons" />,
      topic: "Adresse",
      details: ["Salé Tabriquet", "Avenue Pépinière, Bloc I"],
    },
    {
      icon: <BsTelephoneFill className="contact-icons" />,
      topic: "Phone",
      details: ["+212 06 93 62 73 05", "+261 38 09 048 72"],
    },
    {
      icon: <BsEnvelopeFill className="contact-icons" />,
      topic: "Email",
      details: ["masoandro.capitale@gmail.com", "antoniochrystophe92@gmail.com"],
    },
  ];
  