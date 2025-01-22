import Navbar from "./components/Navbar";
import HeroSection from "./components/hero/HeroSection";
import AboutMe from "./components/About Me/AboutMe";
import Services from "./components/services/Services";

function App() {
  return (
    <div className="relative bg-white overflow-hidden min-h-screen px-[250px]">
      <Navbar />
      <HeroSection/>
      <AboutMe/>
      <Services/>
    </div>
  );
}

export default App;
