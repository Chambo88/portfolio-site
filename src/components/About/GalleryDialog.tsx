import React from "react";
import { createPortal } from "react-dom";
import styles from "./About.module.css";
import CloseIcon from "./CloseIcon";
import LeftIcon from "./LeftIcon";
import RightIcon from "./RightIcon";
import { useState, useEffect } from "react";

interface DialogProps {
  onClose: () => void;
}

export const GalleryDialog: React.FC<DialogProps> = ({ onClose }) => {
  const [leftHover, setLeftHover] = useState<boolean>(false);
  const [rightHover, setRightHover] = useState<boolean>(false);
  const [imageIndex, setImageIndex] = useState<number>(0);

  const images = [
    "src/assets/meuller_hut_high_res.jpg",
    "src/assets/at_work_1.jpg",
    "src/assets/at_work_2.jpg",
    "src/assets/goat_pass.JPEG",
    "src/assets/route_burn.JPEG",
    "src/assets/frisbee.JPEG",
    "src/assets/friends_xmas.JPEG",
    "src/assets/album_cover.JPEG",
  ];

  useEffect(() => {
    const preloadImages = () => {
      for (let i = 1; i < images.length; i++) {
        const img = new Image();
        img.src = images[i];
      }
    };
    console.log("useEffecting");
    preloadImages();
  }, []);

  const goNext = () => {
    setImageIndex((prev: number) => {
      const newIndex = (prev + 1) % images.length;
      console.log("Next Image Index:", newIndex);
      console.log("Next Image Source:", images[newIndex]);
      return newIndex;
    });
  };

  const goPrev = () => {
    setImageIndex((prev: number) => {
      const newIndex = (prev - 1 + images.length) % images.length;
      console.log("Previous Image Index:", newIndex);
      console.log("Previous Image Source:", images[newIndex]);
      return newIndex;
    });
  };

  return createPortal(
    <div className={styles.dialogOverlay} onClick={onClose}>
      <div
        className={styles.dialogContent}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.dialogClose} onClick={onClose}>
          <CloseIcon fillColor="white" size={30} />
        </div>
        <div className={styles.dialogImageArrowsContainer}>
          <div className={styles.dialogButtonArea}>
            <div
              className={styles.dialogLeft}
              onMouseEnter={() => setLeftHover(true)}
              onMouseLeave={() => setLeftHover(false)}
              onClick={goPrev}
            ></div>
            <div className={styles.dialogMiddle}></div>
            <div
              className={styles.dialogRight}
              onMouseEnter={() => setRightHover(true)}
              onMouseLeave={() => setRightHover(false)}
              onClick={goNext}
            ></div>
          </div>
          <div className={styles.dialogArrowContainer}>
            <LeftIcon
              fillColor="white"
              size={40}
              className={styles.dialogArrow}
              style={
                leftHover
                  ? {
                      transform: "scale(1.5)",
                    }
                  : {}
              }
            />
          </div>
          <div className={styles.dialogImageContainer}>
            <img
              src={images[imageIndex]}
              alt={`Gallery Image ${imageIndex + 1}`}
            />
          </div>
          <div className={styles.dialogArrowContainer}>
            <RightIcon
              fillColor="white"
              size={35}
              className={styles.dialogArrow}
              style={
                rightHover
                  ? {
                      transform: "scale(1.5)",
                    }
                  : {}
              }
            />
          </div>
        </div>
        <div style={{ height: "50px", flex: 1 }}></div>
      </div>
    </div>,
    document.getElementById("dialog-root")! // Ensuring this element exists
  );
};
