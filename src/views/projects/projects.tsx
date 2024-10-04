import { useContext } from "react";
import { ThemeContext } from "../../context/context";
import "./projects.css";
import { ProjectsSet } from "../../components/projects-set/projects-set";

const Projects = () => {
  const theme = useContext(ThemeContext);

  return (
    <section id="projects" className={`${theme} projects-container`}>
      <div className="wrapper">
        <ProjectsSet />
      </div>
    </section>
  );
};

export default Projects;
