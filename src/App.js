import Navbar from "./components/Navbar";
import HeroSection from "./components/hero/HeroSection";
function App() {
  return (
    <div className="relative bg-white overflow-hidden min-h-screen px-[250px]">
      <Navbar />
      <HeroSection/>
    </div>
  );
}

export default App;
