import { useState } from "react";
import styles from "./About.module.css";
import { Loader } from "./Loader.tsx";
import { PictureLoader } from "./PictureLoader.tsx";
import PictureIcon from "./PictureIcon.tsx";
import { GalleryDialog } from "./Gallery/GalleryDialog.tsx";

export const About = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [imageHover, setImageHover] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    console.log("hi");
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    console.log("closeDialog");
    setIsDialogOpen(false);
  };

  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.spacer}></div>
        <Loader setLoading={setLoading} />
        <section className={styles.textContainer}>
          <h4
            className={styles.left}
            style={{ backgroundPosition: loading ? "bottom" : "top" }}
          >
            ABOUT &gt;
          </h4>
          <article
            className={styles.center}
            style={{ backgroundPosition: loading ? "bottom" : "top" }}
          >
            I'm super a passionate engineer that's dedicated to seeking out the
            biggest problems to overcome. I strive to pursue excellence,
            continuously grow, learn from talented people and inspire others.
            <br />
            <br /> When I'm not on the mouse & keys, I'm likely either hiking,
            bouldering, jamming the guitar or (sometimes) dominating in games!.
            Originally from NZ and now based in Melbourne for the long haul.
            Always open to opportunities, feel free to give me a bell!
          </article>
          <div className={styles.right}></div>
        </section>
        <div className={styles.imageContainer} onClick={openDialog}>
          <img
            src={"src/assets/portfolio_pic_1_low_res.jpg"}
            alt={"Image of Ben on a mountain! "}
            className={styles.circleImage}
            onMouseEnter={() => setImageHover(true)}
            onMouseLeave={() => setImageHover(false)}
          />
          <div className={styles.imageDescribe}>
            {(imageHover || isDialogOpen) && <PictureLoader />}
          </div>
          <div className={styles.imageIcon}>
            <PictureIcon fillColor="white" size={15} />
          </div>
        </div>
        {isDialogOpen && <GalleryDialog onClose={closeDialog} />}
      </div>
    </>
  );
};
