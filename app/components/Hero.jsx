
'use client';
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../app/animation/animation.css';

const heroImages = [
    '/images/heroimage1.jpg',
    '/images/heroimage2.jpg',
    '/images/heroimage3.jpg',
    '/images/heroimage4.jpg',
];

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: 'slide',
            once: true,
        });
    });

    return (
        <div className='relative h-[650px] border-b-2 border-darkgray overflow-hidden'>
            <AnimatePresence>
                <motion.div
                    key={currentImage}
                    style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
                    className='absolute h-full w-full md:w-2/3 bg-cover bg-center right-0 filter grayscale-[70%]'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                >
                </motion.div>
            </AnimatePresence>
            <div className='absolute w-full mx-auto px-4 md:px-8 lg:px-12'>
                <div className='mt-28 lg:ml-24 z-50'>
                    <h1
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className='text-4xl md:text-6xl lg:text-7xl font-extrabold mb-10 text-transparent bg-clip-text
                        bg-gradient-to-r from-blue-700 to-purple-900 drop-shadow-lg'
                        style={{ lineHeight: 1.3 }}
                    >
                        Welcome to the
                        <br />
                        Spline Team!!
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="500"
                        className='z-50 max-w-2xl text-lg md:text-2xl text-gray-200 bg-white/10 px-3 py-4 
                        rounded-lg shadow-md backdrop-blur-xl'
                        style={{ lineHeight: 1.5 }}
                    >
                        Now, let me introduce the spline Team!
                        so please take your time and have a look.
                    </p>
                </div>
            </div>
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};

export default Hero;