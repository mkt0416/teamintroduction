
'use client';
import Image from 'next/image';
import React from 'react'
import { FaSearchPlus } from "react-icons/fa";
import { motion } from 'framer-motion';

const ProductCard = ({ name, image, setSelectedImage }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className='bg-gray-300 text-black p-6 rounded-lg'
        >
            <Image
                className='w-full h-auto object-cover rounded-lg'
                src={image}
                width={300}
                height={300}
                alt={`${name}image`}
            />
            <div className='w-full flex justify-between items-center mt-2 px-4'>
                <h3 className='text-lg font-bold'>{name}</h3>
                <button
                    onClick={() => setSelectedImage(image)}
                >
                    <FaSearchPlus />
                </button>
            </div>
        </motion.div>
    );
};

export default ProductCard;