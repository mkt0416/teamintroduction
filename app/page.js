
import React from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Features from './components/Features';
import TopMenuButton from './components/TopMenuButton';
import Promotion from './components/Promotion';
import Capacity from './components/Capacity';

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Products />
      <Features />
      <Capacity />
      <Promotion />
      <TopMenuButton />
    </div>
  );
};

export default page;