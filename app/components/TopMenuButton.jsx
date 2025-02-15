
'use client';
import React, { useEffect, useState } from 'react'
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const TopMenuButton = () => {
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setScrolling(true)
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <div className={`${scrolling ? 'fixed bottom-[0.5rem] right-[0.7rem] z-50' : 'hidden'}`}>
            <a href="#home" className='flex flex-col items-center text-theme font-bold'>
                <FaRegArrowAltCircleUp
                    size={40}
                />
                Top
            </a>
        </div>
    );
};

export default TopMenuButton;