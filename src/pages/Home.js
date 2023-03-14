import React from 'react'

import PricingSection from '../sections/PricingSection/PricingSection';
import TreatmentSection from '../sections/TreatmentSection/TreatmentSection';
import InfoSection from '../sections/InfoSection/InfoSection';
import LandingSection from '../sections/LandingSection/LandingSection';
import AboutOsteo from '../sections/AboutOsteoSection/AboutOsteoSection';
import AboutMeSection from '../sections/AboutMeSection/AboutMeSection';

export default function Home() {
  return (
    <div>
        <LandingSection />
        <InfoSection />
        <AboutOsteo />
        <TreatmentSection />
        <PricingSection />
        <AboutMeSection />
    </div>
  )
}
