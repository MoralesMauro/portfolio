import { useContext } from "react";
import SkillSet from "../../components/skill-set/skill-set";
import "./about-me.css";
import { ThemeContext } from "../../context/context";

const AboutMe = () => {
  const theme = useContext(ThemeContext);

  return (
    <section id="about" className={`${theme} about-container`}>
      <div className="wrapper">
        <h3>About Me</h3>
        <p>
          I am a software engineer with experience in Java, TypeScript, and
          React. I have a passion for learning new technologies and building
          software that can make a positive impact on the world.
        </p>
        <h3>Skills</h3>
        <SkillSet />
      </div>
    </section>
  );
};

export default AboutMe;
