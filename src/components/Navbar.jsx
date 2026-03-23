import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const { i18n, t } = useTranslation();

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="w-full fixed top-0 z-30 bg-[#050816]/90 border-b border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-white hover:text-accent transition-colors z-50"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          Ricardo Bravo
        </Link>
        <ul className="hidden sm:flex gap-8 items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`cursor-pointer text-base font-medium transition-colors hover:text-accent ${active === nav.id ? 'text-accent' : 'text-white/70'}`}
              onClick={() => setActive(nav.id)}
            >
              <a href={`#${nav.id}`}>{t(`navbar.${nav.id}`)}</a>
            </li>
          ))}
          <li>
            <a href="https://github.com/RicardoBravo92" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-white/70 hover:text-accent transition-colors">{t('navbar.github')}</a>
          </li>
          <li>
            <a href="http://linkedin.com/in/ricardo-bravo-neri" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-white/70 hover:text-accent transition-colors">{t('navbar.linkedin')}</a>
          </li>
          <li>
            <div className="flex items-center gap-4 ml-4">
              <div className="flex gap-1 border-r border-white/20 pr-4 h-8 items-center">
                <button
                  onClick={() => changeLanguage('es')}
                  className={`px-2 py-1 rounded text-sm border border-white/20 hover:bg-white/10 ${i18n.language === 'es' ? 'bg-accent text-white' : 'text-white'}`}
                >
                  ES
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-2 py-1 rounded text-sm border border-white/20 hover:bg-white/10 ${i18n.language === 'en' ? 'bg-accent text-white' : 'text-white'}`}
                >
                  EN
                </button>
              </div>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full border border-secondary/40 hover:bg-secondary/20 transition-all active:scale-95"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                )}
              </button>
            </div>
          </li>
        </ul>
        {/* Menú móvil */}
        <button
          className="sm:hidden flex items-center justify-center w-10 h-10 rounded hover:bg-white/10 transition"
          onClick={() => setToggle(!toggle)}
          aria-label="Abrir menú"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            {toggle ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
        {toggle && (
          <div className="absolute top-16 right-4 bg-[#050816] border border-white/10 rounded-lg shadow-card p-4 flex flex-col gap-4 min-w-[160px] sm:hidden animate-fade-in shadow-xl">
            {navLinks.map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                className={`text-base font-medium transition-colors hover:text-accent ${active === nav.id ? 'text-accent' : 'text-white/70'}`}
                onClick={() => {
                  setActive(nav.id);
                  setToggle(false);
                }}
              >
                {t(`navbar.${nav.id}`)}
              </a>
            ))}
            <a href="https://github.com/RicardoBravo92" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-white/70 hover:text-accent transition-colors">{t('navbar.github')}</a>
            <a href="http://linkedin.com/in/ricardo-bravo-neri" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-white/70 hover:text-accent transition-colors">{t('navbar.linkedin')}</a>
            <div className="flex gap-2 mt-2 items-center justify-between">
              <div className="flex gap-1">
                <button
                  onClick={() => changeLanguage('es')}
                  className={`px-2 py-1 rounded text-sm border border-white/20 hover:bg-white/10 ${i18n.language === 'es' ? 'bg-accent text-white' : 'text-white'}`}
                >
                  ES
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-2 py-1 rounded text-sm border border-white/20 hover:bg-white/10 ${i18n.language === 'en' ? 'bg-accent text-white' : 'text-white'}`}
                >
                  EN
                </button>
              </div>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-all active:scale-95"
              >
                {theme === 'light' ? (
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                ) : (
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
