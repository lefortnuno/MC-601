"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Video from "@/components/video/Video";
import "./videogallery.css";

interface VideoItem {
  title: string;
  link: string;
  thumbnail: string;
  duration: string;
  author_name: string;
}

interface Props {
  videos: VideoItem[];
  videoName: string;
}

export default function VideoGallery({ videos, videoName }: Props) {
  const [isVideoVisible, setIsVideoVisible] = useState(true);
  const [baseItemsPerPage, setBaseItemsPerPage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setBaseItemsPerPage(3);
      } else if (width < 1024) {
        setBaseItemsPerPage(5);
      } else {
        setBaseItemsPerPage(7);
      }
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const hasPrevious = currentIndex > 0;
  const itemsPerPage = hasPrevious ? baseItemsPerPage - 1 : baseItemsPerPage;
  const visible = videos.slice(currentIndex, currentIndex + itemsPerPage);
  const hasNext = currentIndex + itemsPerPage < videos.length;

  const handleNext = () => setCurrentIndex((i) => i + itemsPerPage);
  const handlePrev = () =>
    setCurrentIndex((i) => Math.max(0, i - itemsPerPage));

  const handleVideoClick = (link: string) => {
    setSelectedVideo(link.replace("watch?v=", "embed/") + "?autoplay=1&mute=0");
    setIsVideoVisible(false);
  };

  const handleClose = () => {
    setSelectedVideo(null);
    setIsVideoVisible(true);
  };

  return (
    <div
      className="content-wrapper"
      style={{ backgroundColor: isVideoVisible ? "transparent" : "black" }}
    >
      <Video name={videoName} onVisibilityChange={setIsVideoVisible} />

      {selectedVideo ? (
        <div className="video-player-overlay">
          <button className="close-btn" onClick={handleClose}>
            ✖
          </button>
          <iframe
            src={selectedVideo}
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
            className="video-player"
          />
        </div>
      ) : (
        <div className="video-list">
          {hasPrevious && (
            <div className="voir-plus" onClick={handlePrev}>
              <p>Voir Précédents</p>
            </div>
          )}

          {visible.map((v) => (
            <div
              key={v.link}
              className="video-card"
              onClick={() => handleVideoClick(v.link)}
            >
              <div className="thumbnail-container">
                <Image
                  src={v.thumbnail}
                  alt={v.title}
                  width={300}
                  height={169}
                  priority
                  className="thumbnail"
                />
                <p className="duration">{v.duration}</p>
                <div className="video-info">
                  <h2 className="title">{v.title}</h2>
                  <p className="channel-name">{v.author_name}</p>
                </div>
              </div>
            </div>
          ))}

          {hasNext && (
            <div className="voir-plus" onClick={handleNext}>
              <p>Voir Plus</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
