import { useState, useEffect } from 'react';

interface NavigationProps {
  currentView: 'home' | 'maker';
  onViewChange: (view: 'home' | 'maker' | 'all-media') => void;
}

export default function Navigation({ currentView, onViewChange }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full px-4 md:px-8 py-4 max-w-[1280px] mx-auto">
      <nav className={`flex items-center justify-between px-6 py-3 bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-full transition-all duration-300 ${scrolled ? 'shadow-lg shadow-wonder-green/5' : ''}`}>
        <button
          onClick={() => onViewChange('home')}
          className="flex items-center gap-2 cursor-pointer hover:opacity-85 transition-opacity focus:outline-none"
        >
          <img src="./logo.png" alt="HD Logo" className="w-8 h-8 rounded-full object-cover" />
          <span className="font-bold tracking-tight text-lg text-gray-100">HD.</span>
        </button>

        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={() => onViewChange('maker')}
            className={`text-xs md:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer focus:outline-none ${currentView === 'maker'
              ? 'text-wonder-green scale-105'
              : 'text-gray-400 hover:text-gray-100 hover:scale-105'
              }`}
          >
            More about Me
          </button>

          <button
            onClick={() => onViewChange('all-media')}
            className="px-4 py-1.5 text-xs font-bold bg-lotus-pink text-white rounded-full hover:scale-105 hover:shadow-lg hover:shadow-lotus-pink/30 active:scale-95 transition-all duration-300 ease-out border border-lotus-pink/20 cursor-pointer"
          >
            Media Coverage
          </button>
        </div>
      </nav>
    </header>
  );
}
