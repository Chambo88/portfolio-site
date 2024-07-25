import styles from "./Header.module.css";
import { useEffect, useState } from "react";

export const Header = () => {
    const headerHeightMax = 0.25; // If adjusting header height, change --header-height in variables.css
    const [height, setHeight] = useState(window.innerHeight * headerHeightMax); // units px
    const [backgroundVisible, setBackgroundVisible] = useState(false);
    // const [displayVerticalLine, setVerticalLine] = useState(false);

    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const maxHeight = viewportHeight * headerHeightMax;
      const minHeight = 50;

      if ((maxHeight - window.scrollY) < minHeight) {
        setHeight(minHeight);
        setBackgroundVisible(true);
      } else {
        setHeight(maxHeight - window.scrollY);
        setBackgroundVisible(false);
      }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
      <>
        <div className={`${styles.headerBackground} ${backgroundVisible ? styles.visible : styles.hidden}`}></div>
        <div className={styles.content}
          style={{ height: `${height}px` }}>
            <h1>
                BEN CHAMBERLAIN
            </h1>
            {/* <div className={styles.verticalLine}
            style={{ display: displayVerticalLine? 'block' : 'none'}}></div> */}
        </div>
      </>
    )
};
  