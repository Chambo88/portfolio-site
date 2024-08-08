import { useState } from "react";
import styles from "./About.module.css";
import { Loader } from "./Loader.tsx";
import { PictureLoader } from "./PictureLoader.tsx";
import PictureIcon from "./PictureIcon.tsx";
import { GalleryDialog } from "./Gallery/GalleryDialog.tsx";
import { GitHubIcon } from "./GitHubIcon.tsx";

export const About = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [imageHover, setImageHover] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <div className={styles.spacer}></div>
      <div className={styles.aboutContainer}>
        <Loader setLoading={setLoading} />
        <section className={styles.textContainer}>
          <div className={styles.left}>
            <h4
              className={styles.textFade}
              style={{ backgroundPosition: loading ? "bottom" : "top" }}
            >
              ABOUT &gt;
            </h4>
          </div>
          <article
            className={`${styles.center} ${styles.textFade}`}
            style={{ backgroundPosition: loading ? "bottom" : "top" }}
          >
            I'm super a passionate SWE that's dedicated to seeking out the
            biggest problems to overcome. I strive to pursue excellence, to
            learn from those I admire and inspire others to do good.
            <br />
            <br /> When I'm not on the mouse & keys, I'm likely either hiking,
            bouldering, jamming the guitar or (sometimes) dominating in games!
            Originally from NZ and now based in Melbourne for the long haul.
            Always open to opportunities, feel free to give me a bell!
          </article>
          <div className={styles.right}></div>
        </section>

        <div className={styles.imageContainer} onClick={openDialog}>
          <div
            className={`${styles.circleImageContainer} ${
              loading ? "" : styles.animateImageContainer
            }`}
          >
            <img
              src={"src/assets/portfolio_pic_1_low_res.jpg"}
              alt={"Image of Ben on a mountain! "}
              className={styles.circleImage}
              onMouseEnter={() => setImageHover(true)}
              onMouseLeave={() => setImageHover(false)}
            />
          </div>

          <div className={styles.imageDescribe}>
            {(imageHover || isDialogOpen) && <PictureLoader />}
          </div>
          <div
            className={`${styles.imageIcon} ${
              loading ? "" : styles.animateImageIcon
            }`}
          >
            <PictureIcon fillColor="white" size={20} />
          </div>
        </div>

        {isDialogOpen && <GalleryDialog onClose={closeDialog} />}

        <div className={styles.socialsContainer}>
          <GitHubIcon />
          {/* <SoicalLink icon={GitHub} link="" />
            <SoicalLink icon={LinkedIn} link="" />
            <SoicalLink icon={Email} link="" />
            <CV icon={LinkedIn} link="" /> */}
        </div>
      </div>
    </>
  );
};
