import emoji from "react-easy-emoji";

export const greetings = {
  name: "Sami Warraich",
  title: "Hi, I'm Sami Warraich",
  description:
    "Full-stack developer with expertise in JavaScript, React, and Node.js ecosystems. Specializing in building responsive web applications and cross-platform mobile solutions. Passionate about creating scalable, efficient, and user-friendly software that solves real-world problems and enhances business performance.",
  resumeLink: "https://sami.warraich.co/resume/",
};

export const openSource = {
  githubUserName: "samiwarraich",
};

export const contact = {};

export const socialLinks = [
  // {
  //   type: "facebook",
  //   link: "https://www.facebook.com/samiwarra1ch",
  //   icon: "fa fa-facebook",
  //   color: "facebook",
  //   ariaLabel: "Facebook",
  // },
  // {
  //   type: "instagram",
  //   link: "https://www.instagram.com/samiwarra1ch",
  //   icon: "fa fa-instagram",
  //   color: "instagram",
  //   ariaLabel: "Instagram",
  // },
  {
    type: "linkedin",
    link: "https://www.linkedin.com/in/samiwarra1ch",
    icon: "fa fa-linkedin",
    color: "twitter",
    ariaLabel: "Linkedin",
  },
  {
    type: "github",
    link: "https://github.com/samiwarraich",
    icon: "fa fa-github",
    color: "github",
    ariaLabel: "Github",
  },
  {
    type: "twitter",
    link: "https://twitter.com/samiwarra1ch",
    icon: "fa fa-twitter",
    color: "twitter",
    ariaLabel: "Twitter",
  },
];

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
    desc: "My Bachelor's degree in Computer Science from Gujrat Institute of Management Sciences provided me with a strong foundation in software development and system management. Throughout the program, I gained expertise in front-end and back-end technologies and developed the skills to create secure and efficient client/server solutions. This education not only enhanced my technical proficiency but also cultivated problem-solving abilities, critical thinking, and attention to detail. These skills have proven invaluable in my career, enabling me to contribute effectively to technology-driven projects and adapt to evolving technological landscapes.",
    descBullets: [],
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
    name: "Pixel Muse",
    desc: "Pixel Muse is a suite of bots that create and share random color pixel images on Twitter and Telegram platforms. You can enjoy these beautiful images every day by following the bots on social media or requesting them via messages or mentions.",
    links: [
      {
        icon: "mdi:internet",
        url: "https://pixel-muse.vercel.app",
      },
      {
        icon: "mdi:github",
        url: "https://github.com/samiwarraich/pixel-muse",
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
  name: "Sami Warraich",
  jobTitle: "Full-Stack Software Engineer",
  author: "Sami Warraich",
  description:
    "Full-stack developer with expertise in JavaScript, React, and Node.js ecosystems. Specializing in building responsive web applications and cross-platform mobile solutions. Passionate about creating scalable, efficient, and user-friendly software that solves real-world problems and enhances business performance.",
  image:
    "https://avatars.githubusercontent.com/u/55091638?s=400&u=c67569833bfa4617eaa179e4d3512cb0800d2a88&v=4",
  url: "https://sami.warraich.co",
  keywords: [
    // Core skills and technologies
    "Full-Stack Developer",
    "Software Engineer",
    "React.js Developer",
    "Node.js Developer",
    "JavaScript Expert",
    "TypeScript Developer",
    "Next.js Specialist",
    "Express.js",
    "React Native Developer",

    // Personal branding
    "Sami Warraich",
    "samiwarraich",
    "Sami Warraich portfolio",

    // Job-related terms
    "Web Developer",
    "Mobile App Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Engineer",

    // Location-specific
    "Web Developer Riyadh",
    "Software Engineer Saudi Arabia",

    // Industry terms
    "RESTful API Development",
    "Database Management",
    "Cloud Computing",
    "Agile Development",
    "UI/UX Integration",

    // Soft skills and attributes
    "Problem Solver",
    "Tech Innovator",
    "Open to Work",

    // Projects (generic terms)
    "Web Application Development",
    "Mobile App Projects",
    "E-commerce Solutions",
    "Data Visualization",

    // Education (if relevant)
    "Computer Science Graduate",
    "Software Engineering Degree",
  ],
  twitter: { site: "@samiwarra1ch", creator: "@samiwarra1ch" },
  skills: [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "React Native",
    "JavaScript",
    "TypeScript",
  ],
  socialLinks: {
    github: "https://github.com/samiwarraich",
    linkedin: "https://linkedin.com/in/samiwarra1ch",
    twitter: "https://x.com/samiwarra1ch",
  },
};
