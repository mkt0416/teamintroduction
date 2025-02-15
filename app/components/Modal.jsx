
'use client'
import Image from 'next/image';
import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { motion } from 'framer-motion';

const Modal = ({ urlImg, onclose }) => {
    if (!urlImg) {
        return;
    }

    return (
        <div
            onClick={onclose}
            className='fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50'
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='relative bg-white text-black p-10 rounded-xl'
            >
                <Image
                    className='w-full h-auto rounded-lg'
                    src={urlImg}
                    width={600}
                    height={600}
                    alt='productimage'
                />
                <button
                    onClick={onclose}
                    className='absolute top-2 right-2 text-3xl'
                >
                    <IoCloseSharp />
                </button>
            </motion.div>
        </div>
    );
};

export default Modal;