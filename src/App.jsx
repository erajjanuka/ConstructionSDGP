// Import necessary modules
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/nav';
import Footer from './Components/Footer';
import HeroSection from './Pages/Hero';
import ServicesSection from './Pages/Services';
import TeamSection from './Pages/Team';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';



function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Define routes for each page */}
          <Route path="" element={<HeroSection />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/team" element={<TeamSection />} />
          <Route path="AboutUs" element={<AboutUs/>}/>
          <Route path="ContactUs" element={<ContactUs/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
