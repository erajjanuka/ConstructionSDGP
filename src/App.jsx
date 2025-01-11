// Import necessary modules
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/nav';
import Footer from './Components/Footer';
import HeroSection from './Pages/Hero';
import ServicesSection from './Pages/Services';
import TeamSection from './Pages/Team';



function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Define routes for each page */}
          <Route path="/" element={<HeroSection />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/team" element={<TeamSection />} />
          
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
