import styles from "./App.module.css";
import { Title } from "./components/Title/Title";
// import { About } from "./components/About/About";
// import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.backgroundGradient}>
        <div className={styles.backgroundTexture}>
          <Title />
          {/* <About /> */}
        </div>
        {/* <Skills /> */}
      </div>

      <div style={{ backgroundColor: "red", height: "200vh" }}>hello</div>
      <div style={{ backgroundColor: "blue", height: "120vh" }}></div>
    </div>
  );
}

export default App;
