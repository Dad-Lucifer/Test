import styles from "./HeroStyles.module.css";
import HeroImg from "../../../assets/hero-img.png";
import sun from "../../../assets/sun.svg";
import moon from "../../../assets/moon.svg";
import twitterLight from "../../../assets/icons8-youtube-logo-150.svg";
import twitterDark from "../../../assets/icons8-youtube-logo.svg";
import linkedinLight from "../../../assets/linkedin-light.svg";
import linkedinDark from "../../../assets/linkedin-dark.svg";
import pinsLight from "../../../assets/icons8-pinterest-dark.svg";
import pinsDark from "../../../assets/icons8-pinterest-light.svg";
import instaLight from "../../../assets/icons8-instagram-light.svg";

import instaDark from "../../../assets/icons8-instagram-dark.svg";
import githubLight from "../../../assets/github-light.svg";
import githubDark from "../../../assets/github-dark.svg";
import CV from "../../../assets/cv.pdf";
import { useTheme } from "../../../Common/ThemeContex";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const pins = theme === "light" ? pinsLight : pinsDark;
  const instagram = theme === "light" ? instaLight : instaDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={HeroImg} alt="Profile of Lucifer" />
        <img
          className={styles.colormode}
          src={themeIcon}
          alt="Color mode Icom"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          El
          <br />
          Lucifer
        </h1>
        <h2>Frontend Editor</h2>
        <span>
          <a
            href="https://www.youtube.com/channel/UCF7LXcNubHew7EHXUiaoEUQ"
            target="_blank"
          >
            <img src={twitterIcon} alt="youtube" />
          </a>
          <a
            href="https://www.linkedin.com/in/roshan-kondar-3200ab258/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkdin" />
          </a>
          <a href="https://github.com/Dad-Lucifer" target="_blank">
            <img src={githubIcon} alt="Github" />
          </a>
          <a href="https://pin.it/20iw3Ioou" target="_blank">
            <img src={pins} alt="pintrest" />
          </a>
          <a href="https://www.instagram.com/djsmash_x/" target="_blank">
            <img src={instagram} alt="Instagram" />
          </a>
        </span>
        <p className={styles.discription}>
          Elevate your brand with captivating visuals. Expert freelance video &
          image editing.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
