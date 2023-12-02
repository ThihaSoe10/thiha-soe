export const METADATA = {
  author: "Thiha Soe",
  title: "Portfolio | Thiha Soe",
  description:
    "Thiha Soe is a Frontend Developer from Myanmar, interested in crafting beautiful and functional applications.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "",
  keywords: [
    "Thiha Soe",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Software Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1690572126/preview.png",
  language: "English",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Frontend Developer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: thihasoe102000@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/thihasoe1",
  },
  {
    name: "github",
    url: "https://github.com/ThihaSoe10",
  },
  {
    name: "instagram",
  },
  {
    name: "twitter",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    // "cpp",
    // "java",
    "python",
    "nodejs",
    "webpack",
    "vite",
    "firebase",
    // "moralis",
    // "stripe",
    "figma",
    "tanstack-query",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
    "chakra-ui",
    "bootstrap-5-1",
    "jquery",
    "unity"
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "sanity-io"],
};

export const PROJECTS = [
  // {
  //   name: "Shotime",
  //   image: "",
  //   blurImage: "",
  //   description:
  //     "Developed with complete E-commerce functionality and User Authentication 🛍️",
  //   gradient: ["#FFCF1B", "#FF881B"],
  //   url: "https://film-lane-website.vercel.app/",
  //   tech: ["react", "tailwindcss", "redux", "mongodb", "stripe"],
  // },
  {
    name: "Oakar Phyo Portfolio",
    image: "/projects/okpport.png",
    blurImage: "/projects/okpport.png",
    description: "Portfolio Website using Figma,HTML,CSS,Javascript,JQuery,Firebase",
    gradient: ["#F14658", "#DC2537"],
    url: "https://porfoliov01-38d97.firebaseapp.com/#",
    tech: ["html", "css", "javascript", "jquery","figma","firebase"],
  },
  {
    name: "Film Lane Movie",
    image: "/projects/film.png",
    blurImage: "/projects/film.png",
    description: "Movie Website using HTML,CSS,Bootstrap,Javascript,chakra-ui",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://film-lane-website.vercel.app/",
    tech: ["bootstrap-5-1", "html","css","javascript", "chakra-ui"],
  },
  {
    name: "Business Agency Website",
    image: "/projects/business.png",
    blurImage: "/projects/business.png",
    description:
      "Business Agency Website Design using HTML,CSS,Bootstrap,Javascript🎙",
    gradient: ["#000066", "#6699FF"],
    url: "https://business-agency-website-psi.vercel.app/",
    tech: ["bootstrap-5-1", "html","css","javascript"],
  },
  {
    name: "Thet Su Naing Portfolio",
    image: "/projects/thetportfolio.png",
    blurImage: "/projects/thetportfolio.png",
    description: "Thet Su Naing's Portfolio using HTML,CSS,Javascript,Figma,Firebase",
    gradient: ["#142D46", "#2E4964"],
    url: "https://thetsunaing-portfolio.web.app/",
    tech: ["html","css","figma","javascript","firebase"],
  },
];

export const WORK = [
  {
    id: 1,
    company: "Code Mastery Hub",
    title: "Junior Frontend Developer",
    location: "Myanmar,Yangon",
    range: "December - Current",
    responsibilities: [
      "Code Implementation: Develop clean and responsive frontend code using HTML, CSS, and JavaScript.",
      "Collaboration: Work closely with design and backend teams for seamless project integration.",
      "Testing and Debugging: Ensure quality by testing across browsers, devices, and resolving any frontend issues.",
    ],
    url: "https://business-agency-website-psi.vercel.app/",
    video: "/work/cmh3.mp4",
  },
  {
    id: 2,
    company: "Code Mastery Hub",
    title: "Web Designer",
    location: "Myanmar,Yangon",
    range: "May - October 2022",
    responsibilities: [
      "Create intuitive and user-friendly interfaces.",
      "Develop visually appealing layouts aligned with brand identity.",
      "Ensure consistent functionality across devices and browsers.",
    ],
    url: "https://business-agency-website-psi.vercel.app/",
    video: "/work/cmh2.mp4",
  },
  {
    id: 3,
    company: "Code Mastery Hub",
    title: "Frontend Developer Intern",
    location: "Myanmar,Yangon",
    range: "September - December 2021",
    responsibilities: [
      "Code Implementation: Develop clean and responsive frontend code using HTML, CSS, and JavaScript.",
      "Collaboration: Work closely with design and backend teams for seamless project integration.",
      "Testing and Debugging: Ensure quality by testing across browsers, devices, and resolving any frontend issues.",
    ],
    url: "https://business-agency-website-psi.vercel.app/",
    video: "/work/cmh1.mp4",
  },
];

export const GTAG = "G-5HCTL2TJ5W";
