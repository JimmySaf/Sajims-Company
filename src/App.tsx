import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatWeDo from "./components/WhatWeDo";
import Services from "./components/Services";
import Techstore from "./components/Techstore";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About /> 
      <WhatWeDo/>
      <Services />
     <Techstore />
     <Contact />
     <Footer />
     <ScrollToTop />
    </>
  );
}

export default App;