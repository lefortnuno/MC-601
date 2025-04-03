export interface VideoItem {
    thumbnail: string;
    duration: string;
    title: string;
    channelName: string;
    link: string;
  }
  
  export const videos: VideoItem[] = [ 
    {
      thumbnail: "/images/film/motivation2.webp",
      duration: "1:44",
      title: "Motivation 2",
      channelName: "Directed by Tony Braven",
      link: "https://www.youtube.com/watch?v=vupxm9kZQo8",
    },
    {
      thumbnail: "/images/film/motivation.webp",
      duration: "1:15",
      title: "Motivation ",
      channelName: "Directed by Tony Braven",
      link: "https://www.youtube.com/watch?v=XVNXEC-m9eg",
    },
    {
      thumbnail: "/images/film/thePatrio.webp",
      duration: "2:12",
      title: "The patriotism",
      channelName: "Directed by Tony Braven",
      link: "https://www.youtube.com/watch?v=n_z-YCsdXvQ",
    },
    {
      thumbnail: "/images/film/waterskyStudio.webp",
      duration: "00:21",
      title: "Watersky Studio",
      channelName: "Directed by Tony Braven",
      link: "https://www.youtube.com/watch?v=8liwN5rUXPo",
    }, 
  ];
  