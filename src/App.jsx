import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Explore from './components/Explore';
import Footer from './components/Footer';


function App() {
  

  return (
    <>
     <Navbar />
     <Hero />
     <Explore />
     <Features />
     <Footer />
    </>
  )
}

export default App
