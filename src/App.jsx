import { useState } from 'react'
import './App.css'
import Navbar from './Components/nav'
import HeroSection from './Pages/Hero'
import Footer from './Components/Footer'
import ServicesSection from './Pages/Services'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <HeroSection></HeroSection>
    <ServicesSection></ServicesSection>
    <Footer></Footer>
    
    
        
    </>
  )
}

export default App
