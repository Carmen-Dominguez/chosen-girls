import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

// Language interface
interface Language {
  code: string;
  name: string;
  flag: string;
}

// Navigation items interface
interface NavItem {
  path: string;
  label: {
    en: string;
    af: string;
  };
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'af'>('en');
  const location = useLocation();

  // Available languages
  const languages: Language[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'af', name: 'Afrikaans', flag: '🇿🇦' }
  ];

  // Navigation items with translations
  const navItems: NavItem[] = [
    { path: '/', label: { en: 'Home', af: 'Tuis' } },
    { path: '/about', label: { en: 'About', af: 'Oor Ons' } },
    { path: '/faqs', label: { en: 'FAQs', af: 'Vrae' } }
  ];

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle language change
  const handleLanguageChange = (langCode: 'en' | 'af') => {
    setCurrentLanguage(langCode);
    // Here you would typically update the app's language context
    // For now, we'll just update the local state
  };

  // Check if a nav item is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          {/* Logo */}
          <Link to="/" className="header__logo">
            <h1>Chosen Girls</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header__nav hide-mobile">
            <ul className="header__nav-list">
              {navItems.map((item) => (
                <li key={item.path} className="header__nav-item">
                  <Link
                    to={item.path}
                    className={`header__nav-link ${isActive(item.path) ? 'active' : ''}`}
                  >
                    {item.label[currentLanguage]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Language Selector */}
          <div className="header__language-selector hide-mobile">
            <div className="language-dropdown">
              <button className="language-dropdown__toggle">
                <span className="language-dropdown__flag">
                  {languages.find(lang => lang.code === currentLanguage)?.flag}
                </span>
                <span className="language-dropdown__text">
                  {languages.find(lang => lang.code === currentLanguage)?.name}
                </span>
                <span className="language-dropdown__arrow">▼</span>
              </button>
              <ul className="language-dropdown__menu">
                {languages.map((language) => (
                  <li key={language.code} className="language-dropdown__item">
                    <button
                      className={`language-dropdown__option ${
                        currentLanguage === language.code ? 'active' : ''
                      }`}
                      onClick={() => handleLanguageChange(language.code as 'en' | 'af')}
                    >
                      <span className="language-dropdown__flag">{language.flag}</span>
                      <span className="language-dropdown__text">{language.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`header__menu-toggle show-mobile ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`header__mobile-nav show-mobile ${isMenuOpen ? 'active' : ''}`}>
          <ul className="header__mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.path} className="header__mobile-nav-item">
                <Link
                  to={item.path}
                  className={`header__mobile-nav-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label[currentLanguage]}
                </Link>
              </li>
            ))}
            <li className="header__mobile-nav-item">
              <div className="header__mobile-language">
                <span>Language / Taal:</span>
                <div className="header__mobile-language-buttons">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      className={`header__mobile-language-btn ${
                        currentLanguage === language.code ? 'active' : ''
                      }`}
                      onClick={() => handleLanguageChange(language.code as 'en' | 'af')}
                    >
                      {language.flag} {language.name}
                    </button>
                  ))}
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
