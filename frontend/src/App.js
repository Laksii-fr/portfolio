import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

// Import components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Loading animation
  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-900 flex justify-center items-center flex-col">
        <div className="text-4xl font-bold text-white mb-4 font-heading">
          L<span className="text-primary">S</span>
        </div>
        <div className="relative w-32 h-2 bg-dark-700 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-primary animate-[loading_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    );
  }
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;