import "./App.css";

import Header from "./Components/Header";
import Home from './Components/Home';
// import About from "./Components/About";
// import Services from "./Components/Services/Services";
// import Contactus from "./Components/Contact/Contactus";
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About_shuaib from './Components/ShuaibAbout';

function App() {
  return (
    <>
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/About" element={<About/>} />   
          <Route path="/About_shuaib" element={<About_shuaib/>} />  */}
        </Routes>

        <Footer/>
    </Router>
    
    </>
  );
}

export default App;
