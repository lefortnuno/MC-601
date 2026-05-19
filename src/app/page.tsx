"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BsPlus } from "react-icons/bs";
import { items } from "@/components/datawarehouse/carousel.data";
import "./pages/sliders/carousel.css";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
        setTransitioning(false);
      }, 500);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const handleManualSlide = (index: number) => {
    setTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setTransitioning(false);
    }, 500);
  };

  const activeItem = items[activeIndex];

  return (
    <div className="blog-card">
      <video
        key={activeItem.video}
        className="video-background"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={activeItem.imgSrc}
        disablePictureInPicture
        controls={false}
      >
        <source src={activeItem.video} type="video/webm" />
        Votre navigateur ne supporte pas la vidéo.
      </video>
      <h1 className="brand-mark">
        BABOKE<br />
        <span className="accent">FILMS</span>
        <span className="tag">MADAGASCAR &rarr; MONDE</span>
      </h1>
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
        <div className={`img-container ${transitioning ? "move-left" : ""}`}>
          <Image
            src={activeItem.imgSrc}
            alt={activeItem.title}
            width={200}
            height={200}
            sizes="200px"
            priority
            className="images-works"
          />
        </div>
        <div className="content">
          <span>{activeItem.date}</span>
          <div className="title">{activeItem.title}</div>
          <div className="text">{activeItem.description}</div>
          <button>
            <a
              href={activeItem.link}
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
