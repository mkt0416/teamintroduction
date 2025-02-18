
import React from 'react'

const Capacity = () => {
    return (
        <div id='capacity' className="container mx-auto mt-64 px-4 md:px-8 lg:px-12">
            <section>
                <div className='flex items-center gap-2'>
                    <div className='w-2 h-6 bg-theme'></div>
                    <h2 className='text-3xl font-bold'>Capacity</h2>
                </div>
                <p className='text-secondary max-w-3xl mt-8'>加工能力は以下となります。</p>

                <table className="mt-10 min-w-full border-collapse border border-gray-300">
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-3 text-xl text-center font-bold bg-darkgray ">
                                Number Of Splines
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-xl text-center">
                                Z6 Z8 Z12 Z16 Z20 Z24 Z26 Z28 Z30 Z32 Z36 Z38 Z40
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-3 text-xl text-center font-bold bg-darkgray ">Minimum Machinable Length</td>
                            <td className="border border-gray-300 px-4 py-3 text-xl  text-center">100L</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-3 text-xl text-center font-bold bg-darkgray">Maximum Machinable Length</td>
                            <td className="border border-gray-300 px-4 py-3 text-xl text-center">7400L</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-3 text-xl text-center font-bold bg-darkgray">Minimum Diameter</td>
                            <td className="border border-gray-300 px-4 py-3 text-xl text-center">φ8</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-3 text-xl text-center font-bold bg-darkgray">Maximum Diameter</td>
                            <td className="border border-gray-300 px-4 py-3 text-xl text-center">φ100</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-3 text-xl text-center font-bold bg-darkgray">Supported Steel Grades</td>
                            <td className="border border-gray-300 px-4 py-3 text-xl text-center">S45C SCM435 SUS etc...</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-3 text-xl text-center font-bold bg-darkgray">Supported Types of Spline</td>
                            <td className="border border-gray-300 px-4 py-3 text-xl text-center">Involute Square Standard</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Capacity;