import emoji from "react-easy-emoji";

export const greetings = {
  name: "Sami Warraich",
  title: "Hi, I'm Sami Warraich",
  description:
    "Full Stack Developer with 3+ years of experience in building web and mobile applications. Specialized in React, React Native, and Node.js. Proven track record of delivering efficient and scalable solutions across diverse projects. Committed to continuous learning and innovation in software development.",
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
    "Experienced full-stack developer focused on delivering efficient and scalable applications",
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
          id: "JavaScript",
          name: "JavaScript",
          className: "logos:javascript",
        },
        {
          id: "TypeScript",
          name: "TypeScript",
          className: "vscode-icons:file-type-typescript-official",
        },
        {
          id: "React",
          name: "React",
          className: "vscode-icons:file-type-reactjs",
        },
        {
          id: "Node-js",
          name: "Node.js",
          className: "logos:nodejs-icon",
        },
        {
          id: "Express-js",
          name: "Express.js",
          className: "logos:express",
        },
        {
          id: "Next-js",
          name: "Next.js",
          className: "logos:nextjs-icon",
        },
        {
          id: "Expo",
          name: "Expo",
          className: "logos:expo-icon",
        },
        {
          id: "MongoDB",
          name: "MongoDB",
          className: "logos:mongodb-icon",
        },
        {
          id: "firebase",
          name: "Firebase",
          className: "logos:firebase",
        },
        {
          id: "Redux",
          name: "Redux",
          className: "logos:redux",
        },
        {
          id: "graphql",
          name: "GraphQL",
          className: "logos:graphql",
        },
        {
          id: "PostgreSQL",
          name: "PostgreSQL",
          className: "logos:postgresql",
        },
        {
          id: "Hasura",
          name: "Hasura",
          className: "logos:hasura-icon",
        },
        {
          id: "Cloudinary",
          name: "Cloudinary",
          className: "logos:cloudinary-icon",
        },
        {
          id: "npm",
          name: "npm",
          className: "logos:npm-icon",
        },
        {
          id: "Postman",
          name: "Postman",
          className: "logos:postman-icon",
        },
        {
          id: "Vercel",
          name: "Vercel",
          className: "logos:vercel-icon",
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
    desc: "Bachelor's degree in Computer Science with focus on software development principles and modern programming practices. Developed a React Native mobile application with Firebase integration for real-time location sharing and messaging as final year project.",
    descBullets: [],
  },
];

export const experience = [
  {
    company: "Dabeeb",
    role: "Software Engineer",
    companylogo: "/img/icons/common/dabeeb.jpeg",
    date: "May 2022 - Present",
    desc: "I'm working as Software Engineer at Dabeeb, a Saudi company that offers scooter and bicycle rental services, I am responsible for the development and maintenance of the app using TypeScript, React Native, Node.js, Express.js, PostgreSQL, and Hasura.",
    // descBullets: [],
  },
  {
    company: "GigaLabs",
    role: "Junior Software Engineer",
    companylogo: "/img/icons/common/gigalabs.jpeg",
    date: "Feb 2021 – Mar 2022",
    desc: "At Gigalabs, I worked as a Junior Software Engineer where I am responsible for developing and maintaining various client applications. My proficiency in JavaScript, React, Node.js, Express.js, MongoDB, and PostgreSQL enables me to meet the diverse needs of our clients.",
  },
];

export const projects = [
  {
    name: "Dabeeb",
    desc: "Developed a comprehensive mobile application using React Native, Express.js, and Hasura for scooter and bicycle rentals. Implemented robust user authentication, real-time availability tracking, and integrated secure payment processing.",
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
    desc: "Contributed to the development of an online platform for customizing and sharing product collections. Implemented key features using React for the frontend and Express.js for the backend, enhancing user experience and platform functionality.",
    links: [
      {
        icon: "mdi:internet",
        url: "https://linesheets.com",
      },
    ],
  },
  {
    name: "New York Adventure Club",
    desc: "Worked on a tour company platform providing insider access to city secrets. Developed both frontend and backend components using React and Express.js, focusing on improving tour booking and management systems.",
    links: [
      {
        icon: "mdi:internet",
        url: "https://nyadventureclub.com",
      },
    ],
  },
  {
    name: "bookit",
    desc: "Created an online reservation system using Next.js, Stripe, and MongoDB to streamline the booking process for hospitality businesses. Implemented real-time availability updates, user account management, and integrated payment gateway for seamless transactions.",
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
    desc: "Developed a full-stack e-commerce platform specializing in headphone sales using Next.js, Sanity, and Stripe.Implemented features including product cataloging, user authentication, shopping cart functionality, and secure payment processing.",
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
    desc: "Developed a suite of automated bots using Next.js and Node.js for generating and distributing random color pixel images across Twitter and Telegram platforms. Implemented image generation algorithms and social media API integrations.",
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
  jobTitle: "Full Stack Developer",
  author: "Sami Warraich",
  description:
    "Full Stack Developer with 3+ years of experience in building web and mobile applications. Specialized in React, React Native, and Node.js. Proven track record of delivering efficient and scalable solutions across diverse projects. Committed to continuous learning and innovation in software development.",
  image:
    "https://avatars.githubusercontent.com/u/55091638?s=400&u=c67569833bfa4617eaa179e4d3512cb0800d2a88&v=4",
  url: "https://sami.warraich.co",
  keywords: [
    // Core skills
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "React Native Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Next.js Developer",
    "Express.js Developer",

    // Technologies
    "React",
    "React Native",
    "Node.js",
    "Express.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "Hasura",

    // Personal branding
    "Sami Ullah Warraich",
    "samiwarraich",

    // Location
    "Software Engineer Riyadh",
    "Developer Saudi Arabia",
  ],
  twitter: { site: "@samiwarra1ch", creator: "@samiwarra1ch" },
  skills: ["JavaScript", "React", "React Native", "Node.js"],
  socialLinks: {
    github: "https://github.com/samiwarraich",
    linkedin: "https://linkedin.com/in/samiwarra1ch",
    twitter: "https://twitter.com/samiwarra1ch",
  },
};
