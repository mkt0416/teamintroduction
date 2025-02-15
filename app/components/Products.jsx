
'use client';
import React, { useState } from 'react'
import ProductCard from './ProductCard';
import ProjectFilter from './ProjectFilter';
import { AnimatePresence } from 'framer-motion';
import Modal from './Modal';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [filtered, setFiltered] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(9);
    const [selectedImage, setSelectedImage] = useState();

    const loadMoreProducts = () => {
        setVisibleProducts((prevProducts) => prevProducts + 6);
    };

    return (
        <div id='product' className='w-full container mx-auto mt-64 px-8 md:px-14 lg:px-24'>
            <section className='w-full'>
                <div className='flex items-center gap-2'>
                    <div className='w-2 h-6 bg-theme'></div>
                    <h2 className='text-3xl font-bold'>Products</h2>
                </div>
                <p className='text-secondary max-w-3xl mt-8'>私たちが製作するスプラインの一部をご紹介します。</p>

                <ProjectFilter
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    setFiltered={setFiltered}
                />

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {filtered.slice(0, visibleProducts).map((product, index) => (
                        <AnimatePresence key={index}>
                            <ProductCard
                                name={product.name}
                                image={product.image}
                                setSelectedImage={setSelectedImage}
                            />
                        </AnimatePresence>
                    ))}
                </div>

                <div className='w-full text-center mt-10'>
                    {visibleProducts < filtered.length && (
                        <button
                            onClick={loadMoreProducts}
                            className='bg-theme py-2 px-4 rounded-lg font-semibold hover:bg-blue-800
                    duration-300 cursor-pointer'
                        >
                            Load More Products
                        </button>
                    )}
                </div>
            </section>

            <Modal
                urlImg={selectedImage}
                onclose={() => setSelectedImage(null)}
            />
        </div>
    );
};

export default Products;