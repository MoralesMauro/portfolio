import "./projects-card.css";

type ProjectsCardProps = {
  el: {
    id: number;
    title: string;
    description: string;
    link: string;
    video: string;
  };
};

const ProjectsCard = ({ el }: ProjectsCardProps) => {
  console.log(el.video);
  return (
    <div className="projects-card-container">
      <div className="project-card-detail">
        <h1>{el.title}</h1>
        <h2>{el.description}</h2>
        <h3>{el.link}</h3>
        <iframe
          width="420"
          height="315"
          src={el.video}
        ></iframe>
      </div>
    </div>
  );
};

export default ProjectsCard;
