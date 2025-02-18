
'use client';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLeaf } from 'react-icons/fa';
import { FaGears } from "react-icons/fa6";
import { FiRefreshCw } from "react-icons/fi";
import { BsListCheck } from "react-icons/bs";

const features = [
    {
        id: 1,
        title: 'Durable Goods',
        icon: < FaGears />,
        color: 'text-red-600',
        hover: 'hover:border-red-600',
        comment1: 'Work hardening',
        comment2: 'Mech performance boost',
        description: '強度と耐久性の大幅な向上を実現し、塑性効果の高まりにより、優れたパフォーマンスを発揮します。'
    },
    {
        id: 2,
        title: 'Efficient Processing Time',
        icon: <FiRefreshCw />,
        color: 'text-blue-600',
        hover: 'hover:border-blue-600',
        comment1: 'High productivity',
        comment2: 'Single-pass finish',
        description: '複数の工程を必要としないため、驚くほど高速な加工時間を実現します。'
    },
    {
        id: 3,
        title: 'Good Quality',
        icon: <BsListCheck />,
        color: 'text-yellow-400',
        hover: 'hover:border-yellow-400',
        comment1: 'Smooth machined surface',
        comment2: 'Centripetal effec',
        description: '仕上がりは鏡面のように美しく、自動向心効果により回転部分での使用が可能です。正確かつ円滑な運動伝達が実現されます。'
    },
    {
        id: 4,
        title: 'Environmentally Friendly',
        icon: <FaLeaf />,
        color: 'text-green-600',
        hover: 'hover:border-green-600',
        comment1: 'High yield rate',
        comment2: 'Producing no chips',
        description: '製造過程で切屑を排出しないため、材料歩留まりが良く、環境に優しい加工方法です。'
    },
];

const Features = () => {

    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: 'slide',
            once: true,
        });
    });

    return (
        <div id='features' className='w-full container mx-auto mt-64 px-4 md:px-8 lg:px-12'>
            <section className='w-full'>
                <div className='flex items-center gap-2'>
                    <div className='w-2 h-6 bg-theme'></div>
                    <h2 className='text-3xl font-bold'>Features</h2>
                </div>
                <p className='text-secondary max-w-3xl mt-8'>私たちが製作するスプラインの特長をご紹介します。</p>

                {features.map((item) => (
                    <div
                        data-aos="fade-up"
                        data-aos-delay="300"
                        key={item.id}
                        className='my-16'
                    >
                        <div className={`border border-blue-200 ${item.hover} duration-300 flex flex-col
                        lg:flex-row items-center p-16 lg:py-20 lg:px-32 lg:space-x-32 cursor-pointer`}>
                            <div className={`${item.color} text-9xl mb-6 lg:mb-0`}>
                                {item.icon}
                            </div>
                            <div className='text-center lg:text-left'>
                                <h3 className='text-3xl font-bold'>{item.title}</h3>
                                <div className='flex flex-wrap justify-center lg:justify-start pt-6 pb-8 gap-3'>
                                    <div className='bg-darkgray py-2 px-4 text-sm'>{item.comment1}</div>
                                    <div className='bg-darkgray py-2 px-4 text-sm'>{item.comment2}</div>
                                </div>
                                <p className='text-secondary'>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Features;