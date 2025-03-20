"use client";

import { useState, useEffect } from "react";
import Template from "@/components/template/Template";
import "./music.css";

interface VideoItem {
  thumbnail: string;
  duration: string;
  channelLogo: string;
  title: string;
  channelName: string;
  views: string;
}

export default function Music() {
  // const videos: VideoItem[] = [/* */];

  const videos: VideoItem[] = [
    {
      thumbnail: "https://i.ytimg.com/vi/OORUHkgg4IM/maxresdefault.jpg",
      duration: "10:03",
      channelLogo:
        "https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj",
      title: "Top 10 Easy To Create JavaScript Games For Beginners",
      channelName: "CodingNepal",
      views: "27K Views • 4 months ago",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg",
      duration: "23:45",
      channelLogo:
        "https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj",
      title: "How to make Responsive Card Slider in HTML CSS & JavaScript",
      channelName: "CodingLab",
      views: "42K Views • 1 year ago",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/OORUHkgg4IM/maxresdefault.jpg",
      duration: "10:03",
      channelLogo:
        "https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj",
      title: "Top 10 Easy To Create JavaScript Games For Beginners",
      channelName: "CodingNepal",
      views: "27K Views • 4 months ago",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg",
      duration: "23:45",
      channelLogo:
        "https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj",
      title: "How to make Responsive Card Slider in HTML CSS & JavaScript",
      channelName: "CodingLab",
      views: "42K Views • 1 year ago",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/OORUHkgg4IM/maxresdefault.jpg",
      duration: "10:03",
      channelLogo:
        "https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj",
      title: "Top 10 Easy To Create JavaScript Games For Beginners",
      channelName: "CodingNepal",
      views: "27K Views • 4 months ago",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/OORUHkgg4IM/maxresdefault.jpg",
      duration: "10:03",
      channelLogo:
        "https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj",
      title: "Top 10 Easy To Create JavaScript Games For Beginners",
      channelName: "CodingNepal",
      views: "27K Views • 4 months ago",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg",
      duration: "23:45",
      channelLogo:
        "https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj",
      title: "How to make Responsive Card Slider in HTML CSS & JavaScript",
      channelName: "CodingLab",
      views: "42K Views • 1 year ago",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg",
      duration: "23:45",
      channelLogo:
        "https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj",
      title: "How to make Responsive Card Slider in HTML CSS & JavaScript",
      channelName: "CodingLab",
      views: "42K Views • 1 year ago",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/OORUHkgg4IM/maxresdefault.jpg",
      duration: "10:03",
      channelLogo:
        "https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj",
      title: "Top 10 Easy To Create JavaScript Games For Beginners",
      channelName: "CodingNepal",
      views: "27K Views • 4 months ago",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg",
      duration: "23:45",
      channelLogo:
        "https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj",
      title: "How to make Responsive Card Slider in HTML CSS & JavaScript",
      channelName: "CodingLab",
      views: "42K Views • 1 year ago",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/OORUHkgg4IM/maxresdefault.jpg",
      duration: "10:03",
      channelLogo:
        "https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj",
      title: "Top 10 Easy To Create JavaScript Games For Beginners",
      channelName: "CodingNepal",
      views: "27K Views • 4 months ago",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/OORUHkgg4IM/maxresdefault.jpg",
      duration: "10:03",
      channelLogo:
        "https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj",
      title: "Top 10 Easy To Create JavaScript Games For Beginners",
      channelName: "CodingNepal",
      views: "27K Views • 4 months ago",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/OORUHkgg4IM/maxresdefault.jpg",
      duration: "10:03",
      channelLogo:
        "https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj",
      title: "Top 10 Easy To Create JavaScript Games For Beginners",
      channelName: "CodingNepal",
      views: "27K Views • 4 months ago",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg",
      duration: "23:45",
      channelLogo:
        "https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj",
      title: "How to make Responsive Card Slider in HTML CSS & JavaScript",
      channelName: "CodingLab",
      views: "42K Views • 1 year ago",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/OORUHkgg4IM/maxresdefault.jpg",
      duration: "10:03",
      channelLogo:
        "https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj",
      title: "Top 10 Easy To Create JavaScript Games For Beginners",
      channelName: "CodingNepal",
      views: "27K Views • 4 months ago",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg",
      duration: "23:45",
      channelLogo:
        "https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj",
      title: "How to make Responsive Card Slider in HTML CSS & JavaScript",
      channelName: "CodingLab",
      views: "42K Views • 1 year ago",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/OORUHkgg4IM/maxresdefault.jpg",
      duration: "10:03",
      channelLogo:
        "https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj",
      title: "Top 10 Easy To Create JavaScript Games For Beginners",
      channelName: "CodingNepal",
      views: "27K Views • 4 months ago",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/OORUHkgg4IM/maxresdefault.jpg",
      duration: "10:03",
      channelLogo:
        "https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj",
      title: "Top 10 Easy To Create JavaScript Games For Beginners",
      channelName: "CodingNepal",
      views: "27K Views • 4 months ago",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/OORUHkgg4IM/maxresdefault.jpg",
      duration: "10:03",
      channelLogo:
        "https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj",
      title: "Top 10 Easy To Create JavaScript Games For Beginners",
      channelName: "CodingNepal",
      views: "27K Views • 4 months ago",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg",
      duration: "23:45",
      channelLogo:
        "https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj",
      title: "How to make Responsive Card Slider in HTML CSS & JavaScript",
      channelName: "CodingLab",
      views: "42K Views • 1 year ago",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/OORUHkgg4IM/maxresdefault.jpg",
      duration: "10:03",
      channelLogo:
        "https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj",
      title: "Top 10 Easy To Create JavaScript Games For Beginners",
      channelName: "CodingNepal",
      views: "27K Views • 4 months ago",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg",
      duration: "23:45",
      channelLogo:
        "https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj",
      title: "How to make Responsive Card Slider in HTML CSS & JavaScript",
      channelName: "CodingLab",
      views: "42K Views • 1 year ago",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/OORUHkgg4IM/maxresdefault.jpg",
      duration: "10:03",
      channelLogo:
        "https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj",
      title: "Top 10 Easy To Create JavaScript Games For Beginners",
      channelName: "CodingNepal",
      views: "27K Views • 4 months ago",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg",
      duration: "23:45",
      channelLogo:
        "https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj",
      title: "How to make Responsive Card Slider in HTML CSS & JavaScript",
      channelName: "CodingLab",
      views: "42K Views • 1 year ago",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/OORUHkgg4IM/maxresdefault.jpg",
      duration: "10:03",
      channelLogo:
        "https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj",
      title: "Top 10 Easy To Create JavaScript Games For Beginners",
      channelName: "CodingNepal",
      views: "27K Views • 4 months ago",
    },
  ];

  const [baseItemsPerPage, setBaseItemsPerPage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const hasPreviousVideos = currentIndex > 0;
  const itemsPerPage = hasPreviousVideos
    ? baseItemsPerPage - 1
    : baseItemsPerPage;
  const visibleVideos = videos.slice(currentIndex, currentIndex + itemsPerPage);
  const hasNextVideos = currentIndex + itemsPerPage < videos.length;

  const handleShowNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
  };

  const handleShowPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - itemsPerPage));
  };

  return (
    <Template>
      <div className="content-wrapper">
        <div className="video-list">
          {hasPreviousVideos && (
            <div className="voir-plus" onClick={handleShowPrevious}>
              <p>Voir Précédents</p>
            </div>
          )}

          {visibleVideos.map((video, index) => (
            <a href="#" className="video-card" key={index}>
              <div className="thumbnail-container">
                <img
                  src={video.thumbnail}
                  alt="Video Thumbnail"
                  className="thumbnail"
                />
                <p className="duration">{video.duration}</p>
              </div>
              <div className="video-info">
                <img
                  src={video.channelLogo}
                  alt="Channel Logo"
                  className="icon"
                />
                <div className="video-details">
                  <h2 className="title">{video.title}</h2>
                  <p className="channel-name">{video.channelName}</p>
                  <p className="views">{video.views}</p>
                </div>
              </div>
            </a>
          ))}

          {hasNextVideos && (
            <div className="voir-plus" onClick={handleShowNext}>
              <p>Voir Plus</p>
            </div>
          )}
        </div>
      </div>
    </Template>
  );
}
