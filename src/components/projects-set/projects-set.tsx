import { projectsSet } from "./data";
import ProjectsCard from "./projects-card/projects-card";
import "./projects-set.css";

export const ProjectsSet = () => {
  return (
    <div className="projects-set-container">{projectsSet.map(el=> <ProjectsCard key={el.id} el={el}/>)}</div>
  )
}
