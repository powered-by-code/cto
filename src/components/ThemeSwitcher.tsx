'use client';

import { useTheme } from './ThemeProvider';
import { useEffect, useState } from 'react';

// List of available themes from DaisyUI
const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee", 
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter"
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show the theme switcher after hydration to avoid UI flickering
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost m-1">
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
        </svg>
      </div>
      <div className="dropdown-content bg-base-200 text-base-content rounded-box w-52 overflow-y-auto shadow-xl h-80">
        <ul className="menu menu-compact p-2">
          {themes.map((t) => (
            <li key={t}>
              <button 
                className={`${theme === t ? 'active' : ''} justify-between`}
                onClick={() => setTheme(t)}
              >
                <span className="capitalize">{t}</span>
                {theme === t && <span className="badge badge-sm badge-primary">Active</span>}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 