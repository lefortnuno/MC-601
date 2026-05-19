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
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pageStack, setPageStack] = useState<number[]>([0]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const isSmall = w <= 680;
      const minColWidth = isSmall ? 200 : 280;
      const sidePadding = isSmall ? 16 : 24;
      const topPadding = 96;
      const bottomPadding = isSmall ? 48 : 64;
      const socialReserve = 50;

      const availableWidth = Math.max(0, w - sidePadding * 2);
      const cols = Math.max(1, Math.floor(availableWidth / minColWidth));
      const cardWidth = availableWidth / cols;
      const cardHeight = cardWidth * (9 / 16);
      const availableHeight = Math.max(
        cardHeight,
        h - topPadding - bottomPadding - socialReserve
      );
      const rows = Math.max(1, Math.floor(availableHeight / cardHeight));

      return cols * rows;
    };

    const update = () => setItemsPerPage(compute());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (currentIndex >= videos.length) {
      setCurrentIndex(0);
      setPageStack([0]);
    }
  }, [currentIndex, videos.length]);

  const hasPrevious = currentIndex > 0;
  let cap = itemsPerPage - (hasPrevious ? 1 : 0);
  const remaining = videos.length - currentIndex;
  if (remaining > cap) cap -= 1;
  const visibleCount = Math.max(0, Math.min(cap, remaining));
  const hasNext = currentIndex + visibleCount < videos.length;
  const visible = videos.slice(currentIndex, currentIndex + visibleCount);

  const handleNext = () => {
    const newIndex = currentIndex + visibleCount;
    setPageStack((s) => [...s, newIndex]);
    setCurrentIndex(newIndex);
  };

  const handlePrev = () => {
    const newStack =
      pageStack.length > 1 ? pageStack.slice(0, -1) : [0];
    setPageStack(newStack);
    setCurrentIndex(newStack[newStack.length - 1]);
  };

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
              <p>← Précédents</p>
            </div>
          )}

          {visible.map((v, i) => (
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
                  sizes="(max-width: 600px) 50vw, (max-width: 1024px) 33vw, 300px"
                  priority={i < 3}
                  loading={i < 3 ? "eager" : "lazy"}
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
              <p>Suivants →</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
