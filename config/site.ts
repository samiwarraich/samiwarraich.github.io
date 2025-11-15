export const siteConfig = {
  name: "Sami Warraich",
  title: "Software Engineer",
  url: "https://samiwarraich.github.io",
  description:
    "Software Engineer specializing in web development. Connect with me to view my resume and professional profiles.",
  keywords: [
    "Sami Warraich",
    "Software Engineer",
    "Web Developer",
    "Full Stack Developer",
    "Portfolio",
  ],

  links: {
    resume: "/resume/",
    github: "https://github.com/samiwarraich",
    linkedin: "https://linkedin.com/in/samiwarra1ch",
    email: "mailto:sami@warraich.co",
  },

  social: {
    twitter: "@samiwarraich",
  },
} as const;

export type SiteConfig = typeof siteConfig;
