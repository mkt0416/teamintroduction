
import Image from 'next/image';
import React from 'react'

const Machine = () => {
    return (
        <div id='machine' className='w-full container mx-auto mt-64 px-4 md:px-8 lg:px-12'>
            <section className='w-full'>
                <div className='flex items-center gap-2'>
                    <div className='w-2 h-6 bg-theme'></div>
                    <h2 className='text-3xl font-bold'>Machine</h2>
                </div>
                <p className='text-secondary max-w-3xl mt-8'>私たちが扱う機械をご紹介します。</p>

                <div className='mt-20 flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-32 lg:items-start'>
                    <div className=''>
                        <h3 className='heading-decoration'>GR8-#1</h3>
                        <h4 className='text-secondary my-3'>Long material processing</h4>
                        <p className='mt-10 xl:text-xl'>
                            最大加工長さ7400mmまで対応可能な設備となります。これにより、大型の長もの加工も迅速かつ高精度に行うことができます。
                            お客様のニーズに合わせた加工をお約束します。
                        </p>
                    </div>
                    <Image
                        className='rounded-md w-full h-auto object-cover'
                        src={'/images/machine1.jpg'} width={500} height={500} alt='machine1' />
                </div>
                <div className='mt-32 flex flex-col lg:flex-row-reverse justify-between items-center gap-10 lg:gap-32 lg:items-start'>
                    <div>
                        <h3 className='heading-decoration'>GR8-#3</h3>
                        <h4 className='text-secondary my-3'>Midle material processing</h4>
                        <p className='mt-10 xl:text-xl'>
                            最大加工長さ4100mmまで対応可能な設備となります。大型設備とは異なり、取り回しがきく設計となっており、
                            中型製品の量産に特化しています。これにより、迅速かつ高精度な加工を実現し、多様なニーズに応えることができます。
                        </p>
                    </div>
                    <Image
                        className='rounded-md w-full h-auto object-cover'
                        src={'/images/machine2.jpg'} width={500} height={500} alt='machine1' />
                </div>
                <div className='mt-32 flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-32 lg:items-start'>
                    <div className=''>
                        <h3 className='heading-decoration'>GR8-#2 #4 #5 #6</h3>
                        <h4 className='text-secondary my-3'>Short material processing</h4>
                        <p className='mt-10 xl:text-xl'>
                            最大加工長さ2000mmまで対応可能な設備となります。小型部品の加工や量産に特化しており、迅速かつ高精度な加工が可能です。
                            お客様の多様なニーズに応じたカスタマイズ加工を提供し、高品質な製品をお届けいたします。
                        </p>
                    </div>
                    <Image
                        className='rounded-md w-full h-auto object-cover'
                        src={'/images/machine3.jpg'} width={500} height={500} alt='machine1' />
                </div>
            </section>
        </div>
    );
};

export default Machine;