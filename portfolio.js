import emoji from "react-easy-emoji";

export const greetings = {
  name: "Sami Warraich",
  title: "Hi, I'm Sami Warraich",
  description:
    "I'm a passionate Full stack developer having experience in developing Full stack Web applications with React.js, Next.js, Node.js, Express.js, and Mobile application development on React Native.",
  resumeLink: "https://samiwarraich.github.io/resume/",
};

export const openSource = {
  githubUserName: "samiwarraich",
};

export const contact = {};

export const socialLinks = {
  // facebook: "https://www.facebook.com/samiwarraich0",
  // instagram: "https://www.instagram.com/samiwarraich0/",
  twitter: "https://twitter.com/samiwarraich2",
  github: "https://github.com/samiwarraich",
  linkedin: "https://www.linkedin.com/in/sami-warraich/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/webdev.json",
      skills: [
        emoji(
          "⚡ Develop highly interactive full stack web and mobile applications."
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
      "The Bachelor of Science in Computer Science(CS) degree option allows students to attain knowledge of effective software application development, client/server application development, and database application development and management for businesses.",
      "The CS degree option is designed to prepare students for careers in the field of software engineering and development.",
    ],
  },
];

export const experience = [
  {
    company: "Dabeeb",
    role: "Software Engineer",
    companylogo: "/img/icons/common/dabeeb.jpeg",
    date: "May 2022 - Present",
    desc: "I worked as Software Engineer on Dabeeb App, Dabeeb is a Saudi company specializing in renting scooters and bicycles for transportation in the Kingdom of Saudi Arabia, I am responsible for the development and maintenance of the app, Utilizing my skills in Typescript, React, Node, Express, PostgreSQL, and Hasura.",
    // descBullets: [],
  },
  {
    company: "GigaLabs",
    role: "Junior Software Engineer",
    companylogo: "/img/icons/common/gigalabs.jpeg",
    date: "Feb 2021 – Mar 2022",
    desc: "As a Junior Software Engineer at Gigalabs, I am responsible for the development and maintenance of the client's application, Utilizing my skills in Javascript, React, Node, Express, MongoDB, and PostgreSQL.",
  },
];

export const projects = [
  {
    name: "Dabeeb",
    desc: "Dabeeb is a Saudi company specializing in renting scooters and bicycles for transportation in the Kingdom of Saudi Arabia.",
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
    desc: "Linesheets is an online platform allowing its users to customize and share their product collections.",
    links: [
      {
        icon: "mdi:internet",
        url: "https://linesheets.com/",
      },
    ],
  },
  {
    name: "New York Adventure Club",
    desc: "NYAC is a tour company, which gives you insider access to the citys best-kept secrets.",
    links: [
      {
        icon: "mdi:internet",
        url: "https://nyadventureclub.com/",
      },
    ],
  },
  {
    name: "bookit",
    desc: "bookit is an online booking system that allows guests to make secure online reservations and helps hotels to accept bookings and collect payments online.",
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
    desc: "Phanox is an e-commerce website built with Next.js, Sanity. Now your reach to all your favorite headphones is just one touch apart.",
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
    name: "Color Gradient Bot",
    desc: "A Telegram bot that sends random gradient images with every message. Add some color to your chats.",
    links: [
      {
        icon: "ic:baseline-telegram",
        url: "https://t.me/colorGradientBot",
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
    "I'm a passionate Full stack developer having experience in developing Full stack Web applications with React.js, Next.js, Node.js, Express.js, and Mobile application development on React Native.",
  image:
    "https://avatars.githubusercontent.com/u/55091638?s=400&u=c67569833bfa4617eaa179e4d3512cb0800d2a88&v=4",
  url: "https://samiwarraich.github.io/",
  keywords: [
    "Sami",
    "Warraich",
    "Sami Warraich",
    "samiwarraich",
    "software engineer",
    "portfolio",
    "my portfolio",
    "developer",
    "full stack developer",
    "open to work",
    "web developer",
    "gigalabs",
    "dabeeb",
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
    "color gradient bot",
  ],
};
