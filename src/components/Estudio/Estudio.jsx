import React from 'react';

const Estudio = () => {
    return (
        <div id="estudios" className='container mx-auto p-4'>
            <div className='ml-2 grid grid-cols-1 lg:grid-cols-2 gap-4 select-none'>
                <div className=''>
                    <h1 className='text-3xl font-bold mb-5 text-redPasion'>Educacion Superior</h1>
                    <ol className="relative border-s ml-9 border-hoverBG">
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-rojoClaro rounded-full mt-1.5 -start-1.5 border border-hoverBG"></div>
                            <time className="mb-1 text-xl font-normal leading-none text-rojoClaro">ESFE/AGAPE 2023 - 2024</time>
                            <h3 className="text-2xl font-semibold text-darkPurple dark:text-lightPurple">Técnico En Ingeniería de Desarrollo de Software</h3>
                            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Diseñar, desarrollar y mantener software, asegurando su correcto funcionamiento y adaptándolo a las necesidades de los usuarios.</p>
                        </li>
                    </ol>
                </div>
                <div className=''>
                    <h1 className='text-3xl font-bold mb-5 text-redPasion'>Otros</h1>
                    <ol className="relative border-s ml-9 border-hoverBG">
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-rojoClaro rounded-full mt-1.5 -start-1.5 border border-hoverBG"></div>
                            <time className="mb-1 text-xl font-normal leading-none text-rojoClaro">TPC Sonsonate, 2022</time>
                            <h3 className="text-2xl font-semibold text-darkPurple dark:text-lightPurple">Mantenimiento de computadoras</h3>
                            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Reparar y mantener computadoras y sistemas informáticos, asegurando su funcionamiento óptimo y prolongando su vida útil.</p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Estudio;
