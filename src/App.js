import React, { Component } from 'react';
import './App.scss';
import AboutOsteo from './sections/AboutOsteoSection/AboutOsteoSection';
import AboutMeSection from './sections/AboutMeSection/AboutMeSection';
import Footer from './components/Footer/Footer';
import InfoSection from './sections/InfoSection/InfoSection';
import LandingSection from './sections/LandingSection/LandingSection';
import NavBar from './components/NavBar/NavBar';
import PricingSection from './sections/PricingSection/PricingSection';
import TreatmentSection from './sections/TreatmentSection/TreatmentSection';

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
        <AboutMeSection />
        <Footer />
      </div>
    );
  }
}

export default App;
