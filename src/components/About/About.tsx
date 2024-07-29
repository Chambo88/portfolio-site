import { useState } from "react";
import styles from "./About.module.css";
import { Loader } from "./Loader.tsx";

export const About = () => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <div className={styles.content}>
        <div className={styles.spacer}></div>
        <Loader setLoading={setLoading} />
        <div className={styles.textContent}>
          <h4 className={styles.left}>ABOUT &gt;</h4>
          <pre
            className={styles.center}
            style={{ backgroundPosition: loading ? "bottom" : "top" }}
          >
            {`TEXT THEAT theat
 jdjdjdffffffffffffffffffffffffffffffffffffff
            jdjjd

            jdjd
            jdjdj
            jdj
          `}
          </pre>
          <div className={styles.right}></div>
        </div>
      </div>
    </>
  );
};
