import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ShoppingCart, Sprout, User } from 'lucide-react';
import LanguageSwitcher from '../utils/LanguageSwitcher';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsAccountMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Sprout className={`w-8 h-8 ${isScrolled ? 'text-primary-600' : 'text-white'}`} />
          <span className={`ml-2 text-xl font-heading font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            Grace Divine
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium text-sm transition-colors duration-200 ${
                isScrolled 
                  ? location.pathname === link.path ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600' 
                  : location.pathname === link.path ? 'text-white font-semibold' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side items */}
        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitcher isScrolled={isScrolled} />
          
          {/* Account Menu */}
          <div className="relative">
            <button
              onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
              className={`p-2 rounded-full transition-colors ${
                isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
              }`}
            >
              <User className={isScrolled ? 'text-gray-700' : 'text-white'} size={20} />
            </button>
            
            {isAccountMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                <Link
                  to="/admin/login"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Login
                </Link>
                <Link
                  to="/admin/dashboard"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Dashboard
                </Link>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => {/* Handle logout */}}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
          
          <Link 
            to="/cart" 
            className={`relative p-2 rounded-full transition-colors ${
              isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
            }`}
          >
            <ShoppingCart className={isScrolled ? 'text-gray-700' : 'text-white'} size={20} />
            {cartItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <Link 
            to="/cart" 
            className={`relative p-2 rounded-full transition-colors ${
              isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
            }`}
          >
            <ShoppingCart className={isScrolled ? 'text-gray-700' : 'text-white'} size={20} />
            {cartItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems}
              </span>
            )}
          </Link>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-md focus:outline-none ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <Sprout className="w-7 h-7 text-primary-600" />
              <span className="ml-2 text-xl font-heading font-bold text-gray-800">
                Grace Divine
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-600 rounded-md focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium ${
                  location.pathname === link.path
                    ? 'text-primary-600 font-semibold'
                    : 'text-gray-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Account Links */}
            <div className="pt-6 border-t border-gray-200">
              <Link
                to="/admin/login"
                className="block text-lg font-medium text-gray-700 mb-4"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/admin/dashboard"
                className="block text-lg font-medium text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
            </div>
          </nav>
          
          <div className="mt-auto pb-8">
            <LanguageSwitcher isScrolled={true} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;