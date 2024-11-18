import "./App.css";

import Header from "./Components/Header";
import Home from './Components/Home';
import About from "./Components/About";
import Services from "./Components/Services";
import ContactUs from "./Components/ContactUs";
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutShuaib from './Components/ShuaibAbout';

function App() {
  return (
    <>
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/About" element={<About/>} />   
          <Route path="/About_shuaib" element={<AboutShuaib/>} /> 
        </Routes>

        <Footer/>
    </Router>
    
    </>
  );
}

export default App;
