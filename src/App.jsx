import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
