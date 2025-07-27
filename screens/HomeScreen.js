import React from 'react';
import MobileAppLayout from '../components/layout/MobileAppLayout'; // ✅ phải default export
import HeroSection from '../components/home/HeroSection';
import CountdownTimer from '../components/home/CountdownTimer';
import AboutSection from '../components/home/AboutSection';
import StatsSection from '../components/home/StatsSection';
import CTASection from '../components/home/CTASection';

const HomeScreen = () => {
  return (
    <MobileAppLayout>
      <HeroSection />
      <CountdownTimer eventDate="2025-12-28T04:30:00" />
      <AboutSection />
      <StatsSection />
      <CTASection />
    </MobileAppLayout>
  );
};

export default HomeScreen;
