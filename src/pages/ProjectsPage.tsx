import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import ProjectCard from '../components/common/ProjectCard';

// Sample project data (would come from database in real implementation)
const projects = [
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
  },
  {
    id: '4',
    title: 'Youth Agricultural Training',
    description: 'Engaging young people in modern agricultural practices to create sustainable livelihoods.',
    image: 'https://images.pexels.com/photos/5231141/pexels-photo-5231141.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Education'
  },
  {
    id: '5',
    title: 'Community Seed Bank',
    description: 'Preserving local seed varieties and promoting biodiversity in agricultural practices.',
    image: 'https://images.pexels.com/photos/6231698/pexels-photo-6231698.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Conservation'
  },
  {
    id: '6',
    title: 'Market Access Program',
    description: 'Connecting small-scale farmers to markets and fair-trade opportunities to increase income.',
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Economic Development'
  }
];

const ProjectsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('projects.title')}
            </h1>
            <p className="text-xl text-white/90">
              {t('projects.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
                Featured Project
              </span>
              <h2 className="text-3xl font-bold mb-4 font-heading">
                Sustainable Farming Initiative
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our flagship project works directly with local communities to implement sustainable farming techniques that improve crop yields while preserving the environment. Through training, resources, and ongoing support, we're helping farmers create sustainable livelihoods.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-primary-100 text-primary-600 rounded-full flex-shrink-0 mr-2 flex items-center justify-center">✓</span>
                  <span>Trained over 500 farmers in sustainable techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-primary-100 text-primary-600 rounded-full flex-shrink-0 mr-2 flex items-center justify-center">✓</span>
                  <span>Increased crop yields by an average of 40%</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-primary-100 text-primary-600 rounded-full flex-shrink-0 mr-2 flex items-center justify-center">✓</span>
                  <span>Reduced water usage through efficient irrigation</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Sustainable Farming Initiative" 
                className="rounded-lg shadow-lg w-full h-full object-cover" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Our Projects"
            subtitle="Explore the various initiatives we're working on to create sustainable change"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
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
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Impact"
            subtitle="Measurable results from our projects"
            center={true}
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-primary-50 rounded-lg p-6 text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">1,200+</div>
              <div className="text-gray-700">Farmers Supported</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-secondary-50 rounded-lg p-6 text-center"
            >
              <div className="text-4xl font-bold text-secondary-600 mb-2">45+</div>
              <div className="text-gray-700">Communities Reached</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-success-50 rounded-lg p-6 text-center"
            >
              <div className="text-4xl font-bold text-success-600 mb-2">40%</div>
              <div className="text-gray-700">Average Yield Increase</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-warning-50 rounded-lg p-6 text-center"
            >
              <div className="text-4xl font-bold text-warning-600 mb-2">30%</div>
              <div className="text-gray-700">Water Usage Reduction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary-900/80 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Get Involved" 
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
              Get Involved in Our Projects
            </h2>
            <p className="text-lg text-white/90 mb-8">
              There are many ways to support our work, from volunteering to donations. Together, we can create sustainable change.
            </p>
            <a 
              href="/contact" 
              className="btn bg-white text-primary-800 hover:bg-gray-100"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;