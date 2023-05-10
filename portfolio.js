import emoji from "react-easy-emoji";

export const greetings = {
  name: "Sami Warraich",
  title: "Hi, I'm Sami Warraich",
  description:
    "Full-stack developer with experience in building web and mobile applications using React.js, Next.js, Node.js, Express.js, and React Native.",
  resumeLink: "https://samiwarraich.github.io/resume/",
};

export const openSource = {
  githubUserName: "samiwarraich",
};

export const contact = {};

export const socialLinks = {
  // facebook: "https://www.facebook.com/samiwarraich0",
  instagram: "https://www.instagram.com/samiwarraich0",
  twitter: "https://twitter.com/samiwarraich2",
  github: "https://github.com/samiwarraich",
  linkedin: "https://www.linkedin.com/in/sami-warraich",
};

export const skillsSection = {
  title: "What I do",
  subTitle:
    "Enthusiastic full-stack developer eager to learn and explore various tech stacks.",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/webdev.json",
      skills: [
        emoji(
          "⚡ Skilled in developing interactive web and mobile applications across various tech stacks."
        ),
      ],
      softwareSkills: [
        {
          skillName: "Javascript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "vscode-icons:file-type-typescript-official",
        },
        {
          skillName: "React",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Node",
          fontAwesomeClassname: "logos:nodejs-icon",
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "logos:express",
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "logos:nextjs-icon",
        },
        {
          skillName: "Expo",
          fontAwesomeClassname: "logos:expo-icon",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "logos:mongodb-icon",
        },
        {
          skillName: "firebase",
          fontAwesomeClassname: "logos:firebase",
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "graphql",
          fontAwesomeClassname: "logos:graphql",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "Hasura",
          fontAwesomeClassname: "logos:hasura-icon",
        },
        {
          skillName: "Cloudinary",
          fontAwesomeClassname: "logos:cloudinary-icon",
        },
        {
          skillName: "npm",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "logos:postman-icon",
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "logos:vercel-icon",
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Backend",
    progressPercentage: 80,
  },
  {
    Stack: "Frontend",
    progressPercentage: 75,
  },
  {
    Stack: "Programming",
    progressPercentage: 60,
  },
];

export const educationInfo = [
  {
    schoolName: "Gujrat Institute of Management Sciences",
    subHeader: "Bachelor of Science (Computer Science)",
    duration: "2016-2021",
    // grade: "3.8 GPA",
    desc: "Computer Science(CS) degree",
    descBullets: [
      "The Computer Science (CS) degree option provides students with the skills and knowledge to develop, implement, and manage software applications and systems for various business domains. Students learn how to use front-end, back-end, and database technologies to create client/server solutions that are secure and efficient.",
    ],
  },
];

export const experience = [
  {
    company: "Dabeeb",
    role: "Software Engineer",
    companylogo: "/img/icons/common/dabeeb.jpeg",
    date: "May 2022 - Present",
    desc: "I'm working as Software Engineer at Dabeeb, a Saudi company that offers scooter and bicycle rental services, I am responsible for the development and maintenance of the app using Typescript, React,React Node, Express, PostgreSQL, and Hasura.",
    // descBullets: [],
  },
  {
    company: "GigaLabs",
    role: "Junior Software Engineer",
    companylogo: "/img/icons/common/gigalabs.jpeg",
    date: "Feb 2021 – Mar 2022",
    desc: "At Gigalabs, I worked as a Junior Software Engineer where I am responsible for developing and maintaining various client applications. My proficiency in Javascript, React, Node, Express, MongoDB, and PostgreSQL enables me to meet the diverse needs of our clients.",
  },
];

export const projects = [
  {
    name: "Dabeeb",
    desc: "Dabeeb provides scooter and bicycle rental services that allow users to access transportation anytime, anywhere. Users can book, unlock, and pay for their rides using a mobile app. Dabeeb aims to make urban mobility more accessible, affordable, and sustainable.",
    links: [
      {
        icon: "bxl:play-store",
        url: "https://play.google.com/store/apps/details?id=com.dabeeb.scooter",
      },
      {
        icon: "basil:app-store-solid",
        url: "https://apps.apple.com/ee/app/dabeeb/id1499308212",
      },
    ],
  },
  {
    name: "linesheets",
    desc: "Linesheets is an online platform that enables users to create and share their own product collections with ease. Users can customize their collections with images, descriptions, prices, and other details. Users can also export their collections as PDFs or share them online with buyers and retailers.",
    links: [
      {
        icon: "mdi:internet",
        url: "https://linesheets.com",
      },
    ],
  },
  {
    name: "New York Adventure Club",
    desc: "NYAC is a tour company that takes you beyond the tourist traps and shows you the hidden gems of New York City. You’ll discover the city’s best-kept secrets, from speakeasies and street art to rooftop gardens and underground tunnels. NYAC’s guides are locals who know the city inside out and will share stories and insights that you won’t find in any guidebook.",
    links: [
      {
        icon: "mdi:internet",
        url: "https://nyadventureclub.com",
      },
    ],
  },
  {
    name: "bookit",
    desc: "Bookit is an online booking system that simplifies the reservation process for both guests and hotels. Guests can make secure online reservations. Hotels can accept bookings and collect payments online with ease. Bookit is powered by Next.js,MongoDB and Stripe, offering a fast and reliable service.",
    links: [
      {
        icon: "mdi:internet",
        url: "https://bookit-sw.vercel.app",
      },
      {
        icon: "mdi:github",
        url: "https://github.com/samiwarraich/bookit",
      },
    ],
  },
  {
    name: "Phanox",
    desc: "Phanox is an e-commerce website that lets you discover and buy your favorite headphones with ease. Built with Next.js and Sanity.",
    links: [
      {
        icon: "mdi:internet",
        url: "https://phanox-sw.vercel.app",
      },
      {
        icon: "mdi:github",
        url: "https://github.com/samiwarraich/phanox",
      },
    ],
  },
  {
    name: "Color Gradient",
    desc: "Color Gradient is a suite of bots that create and share gradient color images on Twitter and Telegram platforms. You can enjoy these beautiful images every day by following the bots on social media or requesting them via messages or mentions.",
    links: [
      {
        icon: "mdi:internet",
        url: "https://colorgradient.vercel.app",
      },
      {
        icon: "mdi:github",
        url: "https://github.com/samiwarraich/color-gradient",
      },
    ],
  },
];

//
export const feedbacks = [
  {
    name: "Amad",
    feedback:
      "I was trying to make a website that is blazingly fast. I had no idea where to start. What did I do? Called my friend Sami. I had no Idea what i Was doing! He fixed it. Website? Fast. Blazingly. Done.",
  },
];

export const seoData = {
  title: "Sami Warraich",
  author: "Sami Warraich",
  description:
    "Full-stack developer with experience in building web and mobile applications using React.js, Next.js, Node.js, Express.js, and React Native.",
  image:
    "https://avatars.githubusercontent.com/u/55091638?s=400&u=c67569833bfa4617eaa179e4d3512cb0800d2a88&v=4",
  url: "https://samiwarraich.github.io",
  keywords: [
    "Sami",
    "Warraich",
    "Sami Warraich",
    "samiwarraich",
    "full-stack software engineer with React and Node experience",
    "Sami Warraich’s portfolio website",
    "my portfolio",
    "coder",
    "full stack engineer",
    "open to work",
    "web developer in Riyadh",
    "gigalabs",
    "dabeeb",
    "bskl",
    "next.js",
    "react",
    "expo",
    "node",
    "react native",
    "GIMS",
    "PMAS AAUR",
    "Riyadh",
    "Gujrat",
    "linesheets",
    "New York Adventure Club",
    "Color Gradient by Sami Warraich",
  ],
  twitter: { site: "@samiwarraich2", creator: "@samiwarraich2" },
};
