import { useState, useEffect } from "react";
import styles from "./Title.module.css";
import { Loader } from "./Loader.tsx";
import BlackToWhiteButton from "../../shared/BlackToWhiteButton.tsx";
import useBodyScrollLock from "./useBodyScrollLock.ts";

export const Title: React.FC = () => {
  const [headerAtTop, setHeaderAtTop] = useState(false);
  const [isLocked, unlock] = useBodyScrollLock();

  const headerHeightMax = 0.5; // If adjusting header height, change --header-height in variables.css TODO
  const [height, setHeight] = useState(window.innerHeight * headerHeightMax); // units px
  // const [displayVerticalLine, setVerticalLine] = useState(false);

  const handleScroll = () => {
    const viewportHeight = window.innerHeight;
    const maxHeight = viewportHeight * headerHeightMax;
    const minHeight = 50;

    if (maxHeight - window.scrollY < minHeight) {
      setHeight(minHeight);
      setHeaderAtTop(true);
    } else {
      setHeight(maxHeight - window.scrollY);
      setHeaderAtTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.headerBackground} ${
          headerAtTop ? styles.visible : styles.hidden
        }`}
      ></div>
      <div className={styles.titleContainer}>
        <div
          className={styles.headerContainer}
          style={{ height: `${height}px` }}
        >
          <div className={styles.headerPositioner}>
            <div className={styles.helloContainer}>
              <h2>Hello! I'm</h2>
            </div>
            <h1>BEN CHAMBERLAIN</h1>
            <Loader />
            <div className={styles.buttonContainer}>
              <BlackToWhiteButton onClick={unlock} label="ENTER" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
