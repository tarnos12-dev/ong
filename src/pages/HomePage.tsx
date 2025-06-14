import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronRight, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import ProjectCard from '../components/common/ProjectCard';
import ProductCard from '../components/common/ProductCard';

const featuredProjects = [
  {
    id: '1',
    title: 'Sustainable Farming Initiative',
    description: 'Teaching sustainable farming techniques to local communities to improve crop yields and soil health.',
    image: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Agriculture'
  },
  {
    id: '2',
    title: 'Women in Agriculture',
    description: 'Empowering women through agricultural training, resources, and market access opportunities.',
    image: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Education'
  },
  {
    id: '3',
    title: 'Clean Water Access',
    description: 'Providing clean water solutions for farming communities to improve irrigation and household use.',
    image: 'https://images.pexels.com/photos/2860705/pexels-photo-2860705.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Infrastructure'
  }
];

const featuredProducts = [
  {
    id: '1',
    name: 'Organic Rice (5kg)',
    price: 2500,
    image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Grains',
    inStock: true
  },
  {
    id: '2',
    name: 'Fresh Cassava (Bundle)',
    price: 3000,
    image: 'https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Vegetables',
    inStock: true,
    discount: 10
  },
  {
    id: '3',
    name: 'Organic Plantains (Dozen)',
    price: 1800,
    image: 'https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Fruits',
    inStock: true
  },
  {
    id: '4',
    name: 'Pure Honey (500ml)',
    price: 4500,
    image: 'https://images.pexels.com/photos/162827/honey-sweet-syrup-organic-162827.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Processed',
    inStock: true
  }
];

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Sustainable Agriculture" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 md:leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="btn btn-primary">
                {t('home.hero.cta')}
                <ChevronRight className="ml-2" size={18} />
              </Link>
              <Link to="/contact" className="btn btn-outline border-white text-white hover:bg-white/20">
                {t('home.hero.secondary')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                {t('home.mission.title')}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {t('home.mission.text')}
              </p>
              <Link 
                to="/about" 
                className="text-primary-600 font-semibold flex items-center hover:text-primary-700 transition-colors"
              >
                Learn More
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Our Mission" 
                className="rounded-lg shadow-lg w-full object-cover aspect-4/3" 
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-600 rounded-lg p-6 shadow-lg md:max-w-xs">
                <p className="text-white font-medium">
                  "Our goal is to transform lives through sustainable farming and community development."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeader 
            title={t('home.impact.title')} 
            center={true} 
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-lg shadow-sm p-6 text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">1,200+</div>
              <div className="text-gray-700">{t('home.impact.farmers')}</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm p-6 text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">45+</div>
              <div className="text-gray-700">{t('home.impact.communities')}</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white rounded-lg shadow-sm p-6 text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">2,500</div>
              <div className="text-gray-700">{t('home.impact.hectares')}</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-white rounded-lg shadow-sm p-6 text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">30+</div>
              <div className="text-gray-700">{t('home.impact.products')}</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title={t('home.projects.title')}
            subtitle={t('home.projects.subtitle')}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                category={project.category}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/projects" className="btn btn-primary">
              {t('home.projects.viewAll')}
              <ChevronRight className="ml-1" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title={t('home.products.title')}
            subtitle={t('home.products.subtitle')}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
                inStock={product.inStock}
                discount={product.discount}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/products" className="btn btn-primary">
              {t('home.products.viewAll')}
              <ChevronRight className="ml-1" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary-900/80 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/235925/pexels-photo-235925.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Support Us" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us in Creating Sustainable Change
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Your support helps us empower communities, improve agricultural practices, and create lasting change.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn bg-white text-primary-800 hover:bg-gray-100">
                Get Involved
              </Link>
              <Link to="/products" className="btn border-2 border-white text-white hover:bg-white/20">
                Support Through Purchases
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;