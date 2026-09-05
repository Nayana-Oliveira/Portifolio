import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TechStack from "./components/TechStack/TechStack"
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;