// VIDEO nataoko liens URL YOUTUBE nefa lasa naha be asa

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./pages/sliders/carousel.css";
import { BsPlus } from "react-icons/bs";

interface Item {
  imgSrc: string;
  video: string;
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
    video: "https://www.youtube.com/embed/aF_XP1Ey_G4",
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
    video: "https://www.youtube.com/embed/gE-0sHt1kDE",
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
    video: "https://www.youtube.com/embed/2PRCkgpSIJQ",
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

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5500);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handleManualSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="blog-card">
      <iframe
        className="video-background"
        src={`${
          items[activeIndex].video
        }?autoplay=1&mute=1&loop=1&playlist=${items[activeIndex].video
          .split("/")
          .pop()}&controls=0&disablekb=1&modestbranding=1&fs=0&rel=0&showinfo=0`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <div className="sliders">
        {items.map((_, index) => (
          <button
            key={index}
            className={`tap ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleManualSlide(index)}
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
              Voir Plus <BsPlus />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
