import React, { Component } from 'react';
import './App.css';
import AboutOsteo from './sections/AboutOsteoSection';
import AboutSusaSection from './sections/AboutSusaSection';
import Footer from './components/Footer';
import InfoSection from './sections/InfoSection';
import LandingSection from './sections/LandingSection';
import NavBar from './components/NavBar';
import PricingSection from './sections/PricingSection';
import TreatmentSection from './sections/TreatmentSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <LandingSection />
        <InfoSection />
        <AboutOsteo />
        <TreatmentSection />
        <PricingSection />
        <AboutSusaSection />
        <Footer />
      </div>
    );
  }
}

export default App;
