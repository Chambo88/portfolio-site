import styles from "./About.module.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

interface LoaderProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Loader: React.FC<LoaderProps> = ({ setLoading }) => {
  const [showStatic, setShowStatic] = useState(false);
  return (
    <div className={styles.subtitleContainer}>
      ben@portfolio:~$
      {showStatic ? (
        <>
          ./get_info -role "FULL_STACK_SOFTWARE_ENGINEER" \ <br />
          -about -skills -projects
        </>
      ) : (
        <TypeAnimation
          sequence={[
            1000,
            './get_info -role "FULL_STACK_SOFTWARE_ENGINEER" \\\n -about -skills -projects',
            () => {
              setLoading(false);
              setShowStatic(true);
            },
          ]}
          wrapper="span"
          speed={75}
          style={{ whiteSpace: "pre-line", display: "inline" }}
          cursor={true}
        />
      )}
    </div>
  );
};
