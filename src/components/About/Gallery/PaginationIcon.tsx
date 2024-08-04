import styles from "../About.module.css";

interface IconProps {
  glow: boolean;
}

export default function PaginationIcon({ glow }: IconProps) {
  return (
    <div className={styles.dialogPaginationFlex}>
      <div
        className={styles.dialogPaginationDot}
        style={{
          boxShadow: glow ? "0 0 10px 4px rgba(255,255,255,1)" : "",
          backgroundColor: glow ? "white" : "grey",
        }}
      ></div>
    </div>
  );
}
