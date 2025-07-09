import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="w-full fixed top-0 z-30 bg-white border-b border-secondary/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-text hover:text-accent transition-colors"
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
              className={`cursor-pointer text-base font-medium transition-colors hover:text-accent ${active === nav.title ? 'text-accent' : 'text-muted'}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li>
            <a href="https://github.com/RicardoBravo92" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-muted hover:text-accent transition-colors">{t('navbar.github')}</a>
          </li>
          <li>
            <a href="http://linkedin.com/in/ricardo-bravo-neri" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-muted hover:text-accent transition-colors">LinkedIn</a>
          </li>
          <li>
            <button
              onClick={() => changeLanguage('es')}
              className={`mx-1 px-2 py-1 rounded text-sm border border-secondary/40 hover:bg-secondary/20 ${i18n.language === 'es' ? 'bg-accent text-white' : ''}`}
            >
              ES
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`mx-1 px-2 py-1 rounded text-sm border border-secondary/40 hover:bg-secondary/20 ${i18n.language === 'en' ? 'bg-accent text-white' : ''}`}
            >
              EN
            </button>
          </li>
        </ul>
        {/* Menú móvil */}
        <button
          className="sm:hidden flex items-center justify-center w-10 h-10 rounded hover:bg-secondary/30 transition"
          onClick={() => setToggle(!toggle)}
          aria-label="Abrir menú"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text">
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
          <div className="absolute top-16 right-4 bg-white border border-secondary/40 rounded-lg shadow-card p-4 flex flex-col gap-4 min-w-[160px] sm:hidden animate-fade-in">
            {navLinks.map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                className={`text-base font-medium transition-colors hover:text-accent ${active === nav.title ? 'text-accent' : 'text-muted'}`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false);
                }}
              >
                {nav.title}
              </a>
            ))}
            <a href="https://github.com/RicardoBravo92" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-muted hover:text-accent transition-colors">{t('navbar.github')}</a>
            <a href="http://linkedin.com/in/ricardo-bravo-neri" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-muted hover:text-accent transition-colors">LinkedIn</a>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => changeLanguage('es')}
                className={`px-2 py-1 rounded text-sm border border-secondary/40 hover:bg-secondary/20 ${i18n.language === 'es' ? 'bg-accent text-white' : ''}`}
              >
                ES
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-1 rounded text-sm border border-secondary/40 hover:bg-secondary/20 ${i18n.language === 'en' ? 'bg-accent text-white' : ''}`}
              >
                EN
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
