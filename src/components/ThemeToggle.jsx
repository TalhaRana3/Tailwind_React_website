import React, { useEffect } from "react";
import assets from "../assets/assets";


const ThemeToggle = ({ theme, setTheme }) => {

  useEffect(()=>{
    // Prefer the user's OS-level preference only when there is no saved theme
    const preferDarkMode = window.matchMedia('(prefer-color-scheme: dark)').matches;
    const stored = localStorage.getItem('theme');

    if (!stored) {
      setTheme(preferDarkMode ? 'dark' : 'light')
    }
  },[setTheme])

  useEffect(()=>{
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
    else{
      document.documentElement.classList.remove('dark');
    }

    // Guard localStorage write/remove to avoid storing `undefined`
    if (theme) {
      localStorage.setItem('theme', theme)
    } else {
      localStorage.removeItem('theme')
    }
  },[theme])

  return (
    <div>
      <button className="cursor-pointer">
        {theme === "dark" ? (
          <img onClick={()=>setTheme('light')}
            src={assets.sun_icon}
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"
          />
        ) : (
          <img onClick={()=>setTheme('dark')} src={assets.moon_icon} className="size-8.5 p-1.5 border border-gray-500 rounded-full" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
