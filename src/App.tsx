import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <About />
      <div style={{ backgroundColor: "red", height: "200vh" }}>hello</div>
      <div style={{ backgroundColor: "blue", height: "120vh" }}></div>
    </div>
  );
}

export default App;
