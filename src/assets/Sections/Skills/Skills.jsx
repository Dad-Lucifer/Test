import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../../assets/checkmark-dark.svg";
import SkillList from "../../../Common/SkillList";

function Skills() {
  return (
    <section id="Skills" className={styles.container}>
      <h1 className="sectionTitle"> Skills</h1>
      <div className={styles.SkillList}>
        <SkillList src={checkMarkIcon} skill="PHOTOSHOP" />
        <SkillList src={checkMarkIcon} skill="PREMIER PRO" />
        <SkillList src={checkMarkIcon} skill="FILMORA PRO" />
        <SkillList src={checkMarkIcon} skill="GFX" />
        <SkillList src={checkMarkIcon} skill="VFX" />
      </div>
      <hr />
      <div className={styles.SkillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="ADVANCE PYTHON" />
        <SkillList src={checkMarkIcon} skill="BASIC JAVA" />
        <SkillList src={checkMarkIcon} skill="ADVANCE HTML" />
      </div>
      <hr />
      <div className={styles.SkillList}>
        <SkillList src={checkMarkIcon} skill="EVENT MANAGER" />
        <SkillList src={checkMarkIcon} skill="TEAM LEADING SKILLS" />
        <SkillList src={checkMarkIcon} skill="FREELANCE" />
        <SkillList src={checkMarkIcon} skill="PUBLIC SPEACKING" />
      </div>
    </section>
  );
}

export default Skills;
