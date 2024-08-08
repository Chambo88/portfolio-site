import styles from "./Title.module.css";
import { TypeAnimation } from "react-type-animation";

export const Loader: React.FC = () => {
  return (
    <div className={styles.subtitleContainer}>
      ben@portfolio:~$
      <TypeAnimation
        sequence={[
          1000,
          './get_info -role "FULL_STACK_SOFTWARE_ENGINEER" -about -skills -projects',
        ]}
        wrapper="span"
        speed={75}
        style={{ whiteSpace: "pre-line", display: "inline" }}
        cursor={true}
      />
    </div>
  );
};
