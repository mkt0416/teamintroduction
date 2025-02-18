
import React from 'react'
import { VscSettingsGear } from 'react-icons/vsc';

const Footer = () => {
    return (
        <footer className='w-full flex justify-center py-5'>
            <div className='flex items-center gap-1 text-xl md:text-2xl font-bold'>
                <VscSettingsGear />
                <p>Spline Team {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;