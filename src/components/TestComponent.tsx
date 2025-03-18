'use client';

import { useTheme } from './ThemeProvider';

export default function TestComponent() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="p-4 m-4 bg-base-300 text-base-content rounded">
      <h2 className="text-2xl font-bold">Theme Test</h2>
      <p className="mt-2">Current theme: <span className="font-bold">{theme}</span></p>
      <div className="flex flex-wrap gap-2 mt-4">
        <button 
          className="btn btn-sm btn-primary" 
          onClick={() => setTheme('light')}
        >
          Light Theme
        </button>
        <button 
          className="btn btn-sm btn-primary" 
          onClick={() => setTheme('dark')}
        >
          Dark Theme
        </button>
        <button 
          className="btn btn-sm btn-primary" 
          onClick={() => setTheme('cupcake')}
        >
          Cupcake Theme
        </button>
        <button 
          className="btn btn-sm btn-primary" 
          onClick={() => setTheme('cyberpunk')}
        >
          Cyberpunk Theme
        </button>
        <button 
          className="btn btn-sm btn-primary" 
          onClick={() => setTheme('synthwave')}
        >
          Synthwave Theme
        </button>
        <button 
          className="btn btn-sm btn-primary" 
          onClick={() => setTheme('retro')}
        >
          Retro Theme
        </button>
      </div>
    </div>
  );
} 