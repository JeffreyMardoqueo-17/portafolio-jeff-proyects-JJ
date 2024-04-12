import React, { useState } from 'react';

const AboutMe = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`font-sans antialiased leading-normal tracking-wider`}>
            <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">

                <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none bg-white opacity-75 mx-6 lg:mx-0">
                    <div className="p-4 md:p-12 text-center lg:text-left">
                        {/* Image for mobile view */}
                        <div className="block lg:hidden rounded-full mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style={{ backgroundImage: "url('/imgs/peer.png')" }}></div>
                        <h1 className="text-3xl font-bold pt-8 lg:pt-0">Your Name</h1>
                        {/* Rest of the content... */}
                    </div>
                </div>
                {/* Img Col */}
                <div className="w-full lg:w-2/5">
                    <img src="/imgs/peer.png" className="rounded-none lg:rounded-lg hidden lg:block" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
