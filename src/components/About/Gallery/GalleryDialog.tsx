import React from "react";
import { createPortal } from "react-dom";
import styles from "../About.module.css";
import CloseIcon from "./CloseIcon";
import LeftIcon from "./LeftIcon";
import RightIcon from "./RightIcon";
import { useState, useEffect } from "react";
import PaginationIcon from "./PaginationIcon";
import { DescriptionLoader } from "./DescriptionLoader";
import { images } from "./ImageInfos";

interface DialogProps {
  onClose: () => void;
}

export const GalleryDialog: React.FC<DialogProps> = ({ onClose }) => {
  const [leftHover, setLeftHover] = useState<boolean>(false);
  const [rightHover, setRightHover] = useState<boolean>(false);
  const [imageIndex, setImageIndex] = useState<number>(0);

  useEffect(() => {
    const preloadImages = () => {
      for (let i = 1; i < images.length; i++) {
        const img = new Image();
        img.src = images[i].address;
      }
    };
    preloadImages();
  }, []);

  const goNext = () => {
    setImageIndex((prev: number) => {
      const newIndex = (prev + 1) % images.length;
      return newIndex;
    });
  };

  const goPrev = () => {
    setImageIndex((prev: number) => {
      const newIndex = (prev - 1 + images.length) % images.length;
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
          <div className={styles.dialogImageContainer}>
            <div className={styles.dialogButtonArea}>
              <div
                className={styles.dialogLeft}
                onMouseEnter={() => setLeftHover(true)}
                onMouseLeave={() => setLeftHover(false)}
                onClick={goPrev}
              >
                <div className={styles.dialogArrowContainer}>
                  <LeftIcon
                    fillColor="white"
                    size={40}
                    className={styles.dialogArrow}
                    style={
                      leftHover
                        ? {
                            transform: "scale(1.3)",
                          }
                        : {}
                    }
                  />
                </div>
              </div>
              <div className={styles.dialogMiddle}></div>
              <div
                className={styles.dialogRight}
                onMouseEnter={() => setRightHover(true)}
                onMouseLeave={() => setRightHover(false)}
                onClick={goNext}
              >
                {" "}
                <div className={styles.dialogArrowContainer}>
                  <RightIcon
                    fillColor="white"
                    size={35}
                    className={styles.dialogArrow}
                    style={
                      rightHover
                        ? {
                            transform: "scale(1.3)",
                          }
                        : {}
                    }
                  />
                </div>
              </div>
            </div>
            <div className={styles.dialogDescriptionContainer}>
              <DescriptionLoader
                key={imageIndex}
                text={images[imageIndex].description}
              ></DescriptionLoader>
            </div>
            <img
              src={images[imageIndex].address}
              alt={`Gallery Image ${imageIndex + 1}`}
            />
          </div>
        </div>
        <div className={styles.dialogPaginationContainer}>
          {Array.from({ length: images.length }, (_, index) => (
            <PaginationIcon key={index} glow={index === imageIndex} />
          ))}
        </div>
      </div>
    </div>,
    document.getElementById("dialog-root")! // Ensuring this element exists
  );
};
