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
    imgSrc: "/images/veve.webp",
    video: "/video/webp/veve-mc.webm",
    author: "601 Bro",
    title: "WORKOUT ",
    date: "12 Janvier 2022",
    topic: "Motivation",
    description: "",
    link: "https://www.youtube.com/watch?v=XVNXEC-m9eg",
  },
  {
    imgSrc: "/images/diaspo.webp",
    video: "/video/webp/diaspo-mc.webm",
    author: "Masoandro Capital",
    title: "DIASPORA MALAGASY",
    date: "29 Septembre 2021",
    topic: "ANIMAL3",
    description: "",
    link: "https://www.youtube.com/@MASOANDROCAPITAL",
  },
  {
    imgSrc: "/images/veve2.webp",
    video: "/video/webp/veve-workout2.webm",
    author: "Tony Braven",
    title: "PARK VEVE",
    date: "11 Février 2025",
    topic: "Clip Rap",
    description: "",
    link: "https://www.youtube.com/watch?v=vupxm9kZQo8",
  },
];
