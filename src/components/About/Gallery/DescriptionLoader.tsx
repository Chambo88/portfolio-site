import { TypeAnimation } from "react-type-animation";
import styles from "../About.module.css";
import { useEffect } from "react";

export const DescriptionLoader = ({ text }: { text: string }) => {
  useEffect(() => {
    console.log("Im being remaid!");
  }, [text]);

  return (
    <div className={styles.imageTooltipContainer}>
      &gt;
      <TypeAnimation
        sequence={[50, ` ${text}`]}
        wrapper="span"
        speed={70}
        style={{ whiteSpace: "pre-line", display: "inline" }}
        cursor={true}
      />
    </div>
  );
};
