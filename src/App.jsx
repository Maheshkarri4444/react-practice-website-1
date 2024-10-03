import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import WorkFlow from './components/WorkFlow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import { useEffect } from 'react'

const App = () => {

  useEffect(() => {
    // Scroll logic inside useEffect
    document.querySelectorAll('.scroll-link').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const screenWidth = window.innerWidth;
        let offset = screenWidth < 1024 ? 150 : 100;

        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth' // Smooth scrolling effect
        });
      });
    });

    // Cleanup the event listeners on component unmount
    return () => {
      document.querySelectorAll('.scroll-link').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div>
    <Navbar/>
    <div className='max-w-7xl mx-auto pt-20 px-6'>
    <section id="hero">
          <HeroSection/>
        </section>
      <section id="featuring">
          <FeatureSection/>
      </section>
      <section id="workflow">
          <WorkFlow/>
      </section>
      <section id="pricing">
        <Pricing/>
      </section>
      <section id="testimonials">
          <Testimonials/>
      </section>
    <Footer/>
    </div>
    </div>
  )
}

export default App
