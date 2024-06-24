import styles from "./ProjectsStyles.module.css";
import viberr from "../../../assets/AIC_organization logo(1).jpg";
import freshBurger from "../../../assets/cenam.png";
import hypsterglass from "../../../assets/HacketivSpace_Logo_F904.png";
import fitlift from "../../../assets/Yor Forger instagram Post idea.jpg";
import ProjectCard from "../../../Common/ProjectCard";
import GOKU from "../../../assets/goku.jpeg";
import DJLOGO from "../../../assets/DJLOGO.jpeg";
import pan from "../../../assets/PAN.jpg";
import GOJO from "../../../assets/GOJO.jpeg";
function Projects() {
  return (
    <section id="Projects" className={styles.container}>
      <h1 className="sectionTitle"> Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={DJLOGO}
          link={
            "https://www.instagram.com/p/C1muj4TyByl/?utm_source=ig_web_copy_link"
          }
          h3="BRAND LOGO"
          p="GFX WORK"
        />
        <ProjectCard
          src={viberr}
          link={
            "https://drive.google.com/file/d/1wsj0qTB9p3ANoIAb9uw03UW0zBsyrMoa/view?usp=sharing"
          }
          h3="BRAND LOGO"
          p="GFX WORK"
        />
        <ProjectCard
          src={freshBurger}
          link={
            "https://drive.google.com/file/d/1ch9QZsQ7QEQNi8wR-MNKX6WfC9aZCdpx/view?usp=sharing"
          }
          h3="CINEMATOGRAPHY"
          p="VFX WORK"
        />
        <ProjectCard
          src={hypsterglass}
          link={
            "https://drive.google.com/file/d/1ybxisz2g6z9WjOInL4zRouMZAzTaC-Ho/view?usp=sharing"
          }
          h3="COMMUNITY LOGO"
          p="GFX WORK"
        />
        <ProjectCard
          src={fitlift}
          link={"https://pin.it/3SzkDOzcC"}
          h3="YOR FORGER POST DESIGN"
          p="GFX WORK"
        />
        <ProjectCard
          src={GOKU}
          link={
            "https://www.instagram.com/p/C2XkJVwyfiA/?utm_source=ig_web_copy_link"
          }
          h3="GOKU POST DESIGN"
          p="GFX WORK"
        />
        <ProjectCard
          src={pan}
          link={"https://pin.it/4lBXJlV9P"}
          h3="PAN POST DESIGN"
          p="GFX WORK"
        />
        <ProjectCard
          src={GOJO}
          link={
            "https://www.instagram.com/p/C5KgNHrqRqb/?utm_source=ig_web_button_share_sheet"
          }
          h3="PAN POST DESIGN"
          p="GFX WORK"
        />
      </div>
    </section>
  );
}

export default Projects;
