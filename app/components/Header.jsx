
'use client';
import Link from 'next/link';
import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { motion } from 'framer-motion';

const headerListItem = [
    {
        id: 1,
        title: 'About',
        link: '#about',
    },
    {
        id: 2,
        title: 'Product',
        link: '#product',
    },
    {
        id: 3,
        title: 'Features',
        link: '#features',
    },
    {
        id: 4,
        title: 'Capacity',
        link: '#capacity',
    },
];

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header id='home' className='py-8 border-b-2 border-darkgray'>
            <div className='w-full container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24'>
                <Link href={'/'} className='relative group overflow-hidden'>
                    <p className='text-2xl font-bold'>Team Introduction</p>
                    <span className='absolute w-full h-[2px] bg-theme bottom-0 inline-block
                    -translate-x-[100%] group-hover:-translate-x-0 transition-transform duration-700'></span>
                </Link>

                <nav className='hidden md:flex items-center'>
                    <ul className='flex items-center space-x-6'>
                        {headerListItem.map((item) => (
                            <Link
                                href={item.link}
                                key={item.id}
                            >
                                <li className='hover:text-theme duration-300 font-semibold cursor-pointer
                                 group relative'>
                                    {item.title}
                                    <span className='absolute w-full h-[2px] bg-theme -bottom-[1px] left-0
                                    scale-0 group-hover:scale-100 transition-transform duration-500'></span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </nav>

                <div
                    onClick={() => setShowMenu(true)}
                    className='md:hidden w-7 h-5 flex flex-col justify-between group overflow-hidden'
                >
                    <span className='w-full h-[3px] bg-white group-hover:bg-theme inline-flex
                    -translate-x-1 group-hover:-translate-x-0 transition-transform duration-500'></span>
                    <span className='w-full h-[3px] bg-white group-hover:bg-theme inline-flex
                    -translate-x-3 group-hover:-translate-x-0 transition-transform duration-500'></span>
                    <span className='w-full h-[3px] bg-white group-hover:bg-theme'></span>
                </div>

                {showMenu && (
                    <div className='fixed top-0 left-0 w-full h-screen z-50 bg-darkgray bg-opacity-60'>
                        <motion.div
                            className='w-[80%] h-full bg-darkgray pt-8 pl-4 relative'
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span
                                onClick={() => setShowMenu(false)}
                                className='absolute top-8 right-4 text-3xl text-red-200 hover:text-red-600
                            duration-300 cursor-pointer'
                            >
                                <IoCloseSharp />
                            </span>
                            <Link
                                onClick={() => setShowMenu(false)}
                                href={'/'}
                            >
                                <p className='text-2xl font-bold mb-4'>Team Introduction</p>
                            </Link>
                            <ul className='flex flex-col gap-3 font-semibold text-gray-300'>
                                {headerListItem.map((item) => (
                                    <Link
                                        onClick={() => setShowMenu(false)}
                                        href={item.link}
                                        key={item.id}
                                    >
                                        <li className='hover:text-white duration-300 cursor-pointer'>
                                            {item.title}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;