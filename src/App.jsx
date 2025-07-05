import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./component/Nav"; 
import Skills from "./component/Skills";
import About from "./component/About";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Skills />
              <Contact />
              <Footer />
            </>
          }
        />

      
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
