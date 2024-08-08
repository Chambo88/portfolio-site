import styles from "./BlackToWhiteButton.module.css";
import EnterIcon from "./EnterIcon";

interface BlackToWhiteButtonProps {
  onClick: () => void;
  label: string;
}

export default function BlackToWhiteButton({
  onClick,
  label = "Enter",
}: BlackToWhiteButtonProps) {
  return (
    <div onClick={onClick} className={styles.buttonContainer}>
      <span>{label}</span>
      <div className={styles.iconContainer}>
        <EnterIcon size={24} />
      </div>
    </div>
  );
}
