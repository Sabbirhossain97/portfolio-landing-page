import Navbar from "./components/Navbar";
import HeroSection from "./components/hero/HeroSection";
import AboutMe from "./components/About Me/AboutMe";
import Services from "./components/services/Services";
import Projects from "./components/My Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="relative bg-white overflow-hidden min-h-screen px-[250px]">
      <Navbar />
      <HeroSection/>
      <AboutMe/>
      <Services/>
      <Projects/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}

export default App;
