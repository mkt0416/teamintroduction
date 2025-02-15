
import React from 'react'

const aboutItem = [
    { id: 1, number: '3', title: 'Skilled Worker', },
    { id: 2, number: '6', title: 'Machine Count', },
    { id: 3, number: '15+', title: 'Years of Service', },
];

const About = () => {
    return (
        <div id='about' className='w-full container mx-auto mt-64 px-8 md:px-14 lg:px-24'>
            <section className='w-full'>
                <div className='flex items-center gap-2'>
                    <div className='w-2 h-6 bg-theme'></div>
                    <h2 className='text-3xl font-bold'>About</h2>
                </div>
                <p className='text-secondary max-w-3xl mt-8'>私たちについての自己紹介をします。</p>

                <div className='mt-10'>
                    <p className='text-lg md:text-xl leading-relaxed mb-5'>
                        山形の美しき自然の恵みと共に 山形の地に根ざし、私たちは他にはない独自の技術と工法を駆使してスプライン転造加工を行っています。この豊かな環境で培われた匠の技術と、オリジナルの製造プロセスを組み合わせ、高品質な製品を提供することをお約束いたします。山形の風土と共に成長し、皆さまに信頼されるパートナーを目指します。
                    </p>
                    <p className='text-lg md:text-xl leading-relaxed'>
                        私たちは15年以上にわたって培った経験と3名の熟練技術者、そして6台の機械を駆使して、他にはない独自な技術を提供します。各技術者が持つ専門知識と経験が結集し、高品質な製品を生み出します。この少数精鋭のチームだからこそ実現できる迅速な対応と柔軟なサービスで、多様なニーズにお応えします。
                    </p>
                </div>

                <div className='mt-10'>
                    <div className='w-full'>
                        <ul className='flex flex-col md:flex-row justify-between gap-10'>
                            {aboutItem.map((item) => (
                                <li
                                    className='w-full'
                                    key={item.id}
                                >
                                    <div className='bg-darkgray rounded-lg py-16 text-center mb-1'>
                                        <h3 className='text-5xl text-gray-400 font-bold'>{item.number}</h3>
                                        <span className='font-semibold text-xl'>{item.title}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;