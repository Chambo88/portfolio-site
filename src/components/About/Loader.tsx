import styles from "./About.module.css";
import { TypeAnimation } from 'react-type-animation';

interface LoaderProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Loader: React.FC<LoaderProps> = ({ setLoading }) => {

  return (
    <div className={styles.loaderContainer}>
      ben@portfolio:~$
      <TypeAnimation
        sequence={[
          1000,
          './get_info -role "FULL_STACK_SOFTWARE_ENGINEER" \\ \n -about -skills -projects',
          () => {
            setLoading(false);
          }
        ]}
        wrapper="span"
        speed={75}
        style={{ whiteSpace: 'pre-line', display: 'inline' }}
        cursor={true}
      />
    </div>
  )
}