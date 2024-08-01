import styles from "./About.module.css";
import { TypeAnimation } from "react-type-animation";

export const PictureLoader = () => {
  return (
    <div className={styles.imageTooltipContainer}>
      <TypeAnimation
        sequence={[50, "./get_gallery -highlights"]}
        wrapper="span"
        speed={75}
        style={{ whiteSpace: "pre-line", display: "inline" }}
        cursor={true}
      />
    </div>
  );
};
