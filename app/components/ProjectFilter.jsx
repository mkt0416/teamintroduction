
'use client';
import React, { useEffect } from 'react'
import { products } from '../constants/products';

const ProjectFilter = ({ activeCategory, setActiveCategory, setFiltered }) => {

    useEffect(() => {
        if (activeCategory === 'all') {
            setFiltered(products);
            return;
        }
        const filtered = products.filter((product) => product.catgory.includes(activeCategory));
        setFiltered(filtered);
    }, [activeCategory]);

    return (
        <div className='my-10 flex flex-wrap items-center justify-center md:justify-start gap-5'>
            <button
                onClick={() => setActiveCategory('all')}
                className={`rounded-md py-1 px-3
                ${activeCategory == 'all' ? 'bg-theme' : null}`}
            >
                All
            </button>
            <button
                onClick={() => setActiveCategory('involute')}
                className={`rounded-md py-1 px-3
                ${activeCategory == 'involute' ? 'bg-theme' : null}`}
            >
                Involute
            </button>
            <button
                onClick={() => setActiveCategory('square')}
                className={`rounded-md py-1 px-3
                ${activeCategory == 'square' ? 'bg-theme' : null}`}
            >
                Square
            </button>
            <button
                onClick={() => setActiveCategory('standard')}
                className={`rounded-md py-1 px-3
                ${activeCategory == 'standard' ? 'bg-theme' : null}`}
            >
                Standard
            </button>
            <button
                onClick={() => setActiveCategory('hollow')}
                className={`rounded-md py-1 px-3
                ${activeCategory == 'hollow' ? 'bg-theme' : null}`}
            >
                Hollow
            </button>
        </div>
    );
};

export default ProjectFilter;