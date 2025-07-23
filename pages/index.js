import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
  import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import Contact from "../components/ContactUs.jsx";

export default function Home({ githubProfileData }) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      {/* <Feedbacks /> */}
      <Projects />
      <Contact />
      <GithubProfileCard prof={githubProfileData} />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
  try {
    const githubProfileData = await fetch(
      `https://api.github.com/users/${openSource.githubUserName}`
    ).then((res) => {
      if (!res.ok) {
        throw new Error(`GitHub API failed: ${res.status}`);
      }
      return res.json();
    });

    return {
      props: { githubProfileData },
    };
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    // Return fallback data if GitHub API fails
    return {
      props: { 
        githubProfileData: {
          name: openSource.githubUserName,
          bio: "Full Stack Developer",
          public_repos: 0,
          followers: 0,
          following: 0,
          avatar_url: "",
          html_url: `https://github.com/${openSource.githubUserName}`
        }
      },
    };
  }
}
