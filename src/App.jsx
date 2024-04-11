import React, { useState, useEffect } from 'react';
import Menu from './components/Menu/Menu';
import Welcome from './components/welcome/welcome';
import AboutMe from './components/Aboutme/AboutMe';
import Estudio from './components/Estudio/Estudio';

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-20 h-screen fixed overflow-y-auto">
        <Menu toggleTheme={toggleTheme} theme={theme} />
      </div>
      <div className="flex-1 ml-20 h-full flex justify-center items-top bg-lightPurple dark:bg-darkPurple">
        <div className="flex flex-col">
          <Welcome />
          <AboutMe />
          <Estudio />
        </div>
      </div>
    </div>
  );
};

export default App;
