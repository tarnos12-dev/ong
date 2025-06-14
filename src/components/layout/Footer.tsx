import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram, Youtube, Sprout, Mail, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <Sprout className="w-8 h-8 text-primary-400" />
              <span className="ml-2 text-xl font-heading font-bold">Grace Divine</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering communities through sustainable agriculture and development initiatives.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {t('nav.projects')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {t('nav.blog')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">{t('contact.title')}</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="font-medium text-white">{t('contact.info.address')}:</span> 123 Agricultural Way, City
              </li>
              <li className="text-gray-400">
                <span className="font-medium text-white">{t('contact.info.phone')}:</span> +123 456 7890
              </li>
              <li className="text-gray-400">
                <span className="font-medium text-white">{t('contact.info.email')}:</span> info@gracedivineong.org
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">{t('footer.subscribe')}</h4>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest news and projects.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder={t('footer.subscribe.placeholder')}
                className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-gray-800"
              />
              <button className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-lg transition-colors">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Grace Divine NGO. {t('footer.rights')}.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;