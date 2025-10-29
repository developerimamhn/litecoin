'use client';


import React, { useEffect, useState } from "react";
import HeroPage from './HeroPage';
import NavBar from './NavBar';



const Header = () => {
     const [shrink, setShrink] = useState(false);

  useEffect(() => {
    // 1 second later, shrink to width 0
    const timer = setTimeout(() => {
      setShrink(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);
    
    return (
        <div className='relative overflow-hidden 2xl:h-screen customizecollro'>
           <div
              className={`absolute left-0 top-0 h-screen bg-black transition-all duration-1000 z-999 ${
                shrink ? "w-0" : "w-screen"
              }`}
            ></div>
            <NavBar/>
            <HeroPage/>
            
        </div>
    );
};

export default Header;