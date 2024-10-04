import "./skill-card.css";

type SkillCardProps = {
  el: {
    id: number;
    name: string;
    icon: string;
  };
};

const SkillCard = ({ el }: SkillCardProps) => {
  return (
    <div className="skill-card-container">
      <img src={`/src/assets/${el.icon}.svg`} alt={`${el.name} icon`}/>
      <p>{el.name}</p>
    </div>
  );
};

export default SkillCard;
