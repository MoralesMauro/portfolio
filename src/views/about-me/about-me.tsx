import { useContext } from "react";
import SkillSet from "../../components/skill-set/skill-set";
import "./about-me.css";
import { ThemeContext } from "../../context/context";
import { Fade } from "react-awesome-reveal";

const AboutMe = () => {
  const theme = useContext(ThemeContext);

  return (
    <section id="about" className={`${theme} about-container`}>
      <Fade direction="up" triggerOnce>
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
      </Fade>
    </section>
  );
};

export default AboutMe;
