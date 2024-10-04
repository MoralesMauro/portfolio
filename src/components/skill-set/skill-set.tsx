import SkillCard from "./skill-card/skill-card"
import { skills } from "./data"
import "./skill-set.css"


const SkillSet = () => {
  return (
    <div className="skill-set-container">{skills.map(el=> <SkillCard key={el.id} el={el}/>)}</div>
  )
}

export default SkillSet