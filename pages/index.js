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
const Contact = dynamic(() => import("../components/ContactUs.jsx"));

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
    const response = await fetch(
      `https://api.github.com/users/${openSource.githubUserName}`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const githubProfileData = await response.json();
    
    return {
      props: { githubProfileData },
    };
  } catch (error) {
    console.error('Failed to fetch GitHub profile data:', error);
    
    // Return fallback data when API call fails
    return {
      props: { 
        githubProfileData: {
          login: openSource.githubUserName,
          name: "Sami Warraich",
          avatar_url: "",
          bio: "",
          public_repos: 0,
          followers: 0,
          following: 0
        }
      },
    };
  }
}
