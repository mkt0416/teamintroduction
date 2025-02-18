
import React from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Features from './components/Features';
import TopMenuButton from './components/TopMenuButton';
import Promotion from './components/Promotion';
import Capacity from './components/Capacity';
import Footer from './components/Footer';
import Machine from './components/Machine';

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Machine />
      <Products />
      <Features />
      <Capacity />
      <Promotion />
      <TopMenuButton />
      <Footer />
    </div>
  );
};

export default page;