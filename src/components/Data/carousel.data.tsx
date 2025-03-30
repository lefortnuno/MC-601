export interface Item {
    imgSrc: string;
    video: string;
    author: string;
    title: string;
    date: string;
    topic: string;
    description: string;
    link: string;
  }
  
  export const items: Item[] = [
    {
      imgSrc: "/images/img1.jpg",
      video: "/video/veve-mc.mp4",
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
      video: "/video/soudara-mc.mp4",
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
      video: "/video/diaspo-mc.mp4",
      author: "LUNDEV",
      title: "DESIGN SLIDER3",
      date: "29 Septembre 2024",
      topic: "ANIMAL3",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde...",
      link: "#",
    },
  ];
  