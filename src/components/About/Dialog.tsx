import React from "react";
import { createPortal } from "react-dom";
import styles from "./About.module.css";

interface DialogProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ onClose, children }) => {
  return createPortal(
    <div className={styles.dialogOverlay} onClick={onClose}>
      <div
        className={styles.dialogContent}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className={styles.dialogClose} onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("dialog-root")! // Ensuring this element exists
  );
};

export default Dialog;
