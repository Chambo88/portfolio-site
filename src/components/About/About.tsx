import { useState } from "react";
import styles from "./About.module.css";
import { Loader } from "./Loader.tsx"

export const About = () => {
    const [loading, setLoading] = useState<boolean>(true);

    return (
      <>
        <div className={styles.content}>
          <div className={styles.spacer}></div>
          <Loader setLoading={setLoading}/>
            <div className={styles.textContent}
              style={{visibility : loading ? 'hidden' : 'visible'}}>
              <h4 className={styles.left}>ABOUT &gt;</h4>
              <pre className={styles.center}>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the se of Let

                is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard not only five centuries, but also the leap into electronic typesetting,
              </pre>
              <div className={styles.right}></div>
            </div>
          

        </div>
      </>
    )
};
  