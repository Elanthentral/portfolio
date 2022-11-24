import "./App.css";
import ContactForm from "./components/contact-form";
import Education from "./components/education";
import Header from "./components/header/Header";

import Projects from "./components/projects";
import Skills from "./components/skills";
import aos from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import HeroContent from "./components/hero-section/hero-content/HeroContent";
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    aos.init({
      duration: 1000,
    });
  });
  return (
    <div className="App">
      <Header />
      <HeroContent />
      <Skills />
      <Projects />
      <Education />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
