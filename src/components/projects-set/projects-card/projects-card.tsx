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
        <iframe
          width="100%" 
          height="auto"
          src={el.video}
          allowFullScreen
        />
        <h3>{el.title}</h3>
        <p>{el.description}</p>
        <h3>{el.link}</h3>
      </div>
    </div>
  );
};

export default ProjectsCard;
