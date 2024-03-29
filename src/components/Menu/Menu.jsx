import React from 'react';
import { MdDarkMode } from "react-icons/md"; // Icono de la luna
import { WiDaySunny } from "react-icons/wi"; // Icono de sol
import { FaGithub } from "react-icons/fa"; // Icono de GitHub


const Menu = ({ toggleTheme, theme }) => {
    const icon = theme === 'dark' ? <MdDarkMode className="w-8 h-8 fill-current" /> : < WiDaySunny  className="w-8 h-8 fill-current" />;

    const handleClick = (e) => {
        e.preventDefault(); // Evitar que la página se desplace hacia arriba
        toggleTheme(); // Cambiar el tema
    };

    return (
        <body className="flex items-center justify-center h-screen p-2 space-x-6 bg-lightPurple dark:bg-darkPurple">
            {/* <!-- Component Start --> */}
            <div className="flex flex-col items-left w-11  h-auto overflow-hidden  text-darkPurple dark:to-blue-50 dark:text-lightPurple">
                <a className="flex items-center justify-center mt-3" href="#" onClick={handleClick}>
                    {icon}
                </a>
                <div className="flex flex-col items-center mt-3 border-t border-gray-700">
                    <a className="flex items-center justify-center w-11 h-12 mt-2 rounded hover:bg-darkPurple hover:text-lightPurple dark:hover:bg-hoverBG " href="#">
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </a>
                    <a className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-darkPurple hover:text-lightPurple dark:hover:bg-hoverBG " href="https://github.com/JeffreyMardoqueo-17">
                        <FaGithub className='w-6 h-6 stroke-current' />
                    </a>
                </div>
            </div>
        </body>
    );
};

export default Menu;
