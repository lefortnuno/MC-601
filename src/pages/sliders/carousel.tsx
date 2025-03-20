"use client";

import { useState } from "react";
import Template from "@/components/template/Template";
import Image from "next/image";
import "./carousel.css";

interface Item {
  imgSrc: string;
  author: string;
  title: string;
  date: string;
  topic: string;
  description: string;
  link: string;
}

const items: Item[] = [
  {
    imgSrc: "/images/img1.jpg",
    author: "LUNDEV",
    title: "DESIGN SLIDER1",
    date: "12 Janvier 2019",
    topic: "ANIMAL1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde...",
    link: "#",
  },
  {
    imgSrc: "/images/profile-2.jpg",
    author: "LUNDEV",
    title: "DESIGN SLIDER2",
    date: "29 Septembre 2024",
    topic: "ANIMAL2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde...",
    link: "#",
  },
  {
    imgSrc: "/images/profile-3.jpg",
    author: "LUNDEV",
    title: "DESIGN SLIDER3",
    date: "29 Septembre 2024",
    topic: "ANIMAL3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde...",
    link: "#",
  },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Template>
      <div
        className="blog-card"
        style={{ backgroundImage: `url(${items[activeIndex].imgSrc})` }}
      >
        <div className="sliders">
          {items.map((_, index) => (
            <button
              key={index}
              className={`tap ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <div className="inner-part">
          <div className="img-container">
            <Image
              src={items[activeIndex].imgSrc}
              alt={items[activeIndex].title}
              width={200}
              height={200}
              className="images-works"
            />
          </div>
          <div className="content">
            <span>{items[activeIndex].date}</span>
            <div className="title">{items[activeIndex].title}</div>
            <div className="text">{items[activeIndex].description}</div>
            <button>
              <a
                href={items[activeIndex].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir Plus <i className="fa-solid fa-angle-right"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
    </Template>
  );
}
