import { useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import PreLoader from "./components/PreLoader";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Stacks from "./pages/Stacks";
import Testimonial from "./pages/Testimonial";


function App() {
  const [loader, setLoader] = useState(true)
  return (
    <div className="bg-black">
      {loader ? <PreLoader setLoader={setLoader} /> :
      <>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Stacks />
      <Contact />
      <Testimonial />
      <Footer />
      </>
  }
    </div>
  );
}

export default App;
