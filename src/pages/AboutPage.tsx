import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../components/common/SectionHeader';

const teamMembers = [
  {
    id: 1,
    name: 'Marie Dubois',
    role: 'Executive Director',
    image: 'https://images.pexels.com/photos/3757004/pexels-photo-3757004.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bio: 'Marie has 15 years of experience in NGO management and sustainable agriculture initiatives across West Africa.'
  },
  {
    id: 2,
    name: 'Jean Claude Diop',
    role: 'Agricultural Director',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bio: 'With a degree in Agricultural Science, Jean leads our farming initiatives and training programs.'
  },
  {
    id: 3,
    name: 'Fatima Bamba',
    role: 'Community Engagement',
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bio: 'Fatima works directly with community leaders to implement programs and gather feedback for continuous improvement.'
  },
  {
    id: 4,
    name: 'Paul Mensah',
    role: 'Product Manager',
    image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bio: 'Paul oversees the production, quality, and distribution of our agricultural products to markets.'
  }
];

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-white/90">
              Empowering communities through sustainable agriculture and development initiatives since 2015.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary-50 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4 font-heading text-primary-800">
                {t('about.mission.title')}
              </h2>
              <p className="text-gray-700">
                {t('about.mission.text')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-secondary-50 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4 font-heading text-secondary-800">
                {t('about.vision.title')}
              </h2>
              <p className="text-gray-700">
                {t('about.vision.text')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 font-heading">
                {t('about.history.title')}
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                {t('about.history.text')}
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Through partnerships with local communities, government agencies, and international organizations, we've developed sustainable agricultural projects that have positively impacted thousands of lives.
              </p>
              <p className="text-lg text-gray-700">
                Our commitment to excellence, transparency, and community-centered approaches has established us as a trusted partner in rural development and agricultural innovation.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/2505027/pexels-photo-2505027.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Our History" 
                className="rounded-lg shadow-lg w-full h-full object-cover" 
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                <p className="text-primary-600 font-semibold text-lg">Est. 2015</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Journey"
            subtitle="Key milestones in our development"
            center={true}
          />
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute h-full w-0.5 bg-primary-200 left-0 md:left-1/2 transform md:-translate-x-1/2"></div>
            
            {/* 2015 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative md:ml-0 mb-16 md:mb-24 ml-8"
            >
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-1">
                  <h3 className="text-xl font-semibold mb-2">Founded in 2015</h3>
                  <p className="text-gray-600">Grace Divine NGO established with a focus on sustainable agriculture in rural communities.</p>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex justify-center">
                  <div className="w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
            </motion.div>
            
            {/* 2017 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative md:ml-0 mb-16 md:mb-24 ml-8"
            >
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex justify-center">
                  <div className="w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="text-xl font-semibold mb-2">First Major Project (2017)</h3>
                  <p className="text-gray-600">Launched our flagship sustainable farming initiative with 50 local farmers.</p>
                </div>
              </div>
            </motion.div>
            
            {/* 2019 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative md:ml-0 mb-16 md:mb-24 ml-8"
            >
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-xl font-semibold mb-2">Expanded Reach (2019)</h3>
                  <p className="text-gray-600">Grew to support 10 communities and introduced agricultural product sales.</p>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex justify-center">
                  <div className="w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
            </motion.div>
            
            {/* 2022 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative md:ml-0 mb-16 md:mb-24 ml-8"
            >
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex justify-center">
                  <div className="w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="text-xl font-semibold mb-2">Major Recognition (2022)</h3>
                  <p className="text-gray-600">Received national award for contributions to sustainable agriculture and community development.</p>
                </div>
              </div>
            </motion.div>
            
            {/* Present */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative md:ml-0 ml-8"
            >
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-xl font-semibold mb-2">Today</h3>
                  <p className="text-gray-600">Supporting over 1,200 farmers across 45+ communities with sustainable agricultural practices and market access.</p>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex justify-center">
                  <div className="w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title={t('about.team.title')}
            subtitle="Meet the dedicated people behind our mission"
            center={true}
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-72 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Values"
            subtitle="The principles that guide our work"
            center={true}
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-lg bg-primary-50 border-l-4 border-primary-600"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary-700">Sustainability</h3>
              <p className="text-gray-700">
                We promote agricultural practices that are environmentally sustainable, economically viable, and socially responsible.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-lg bg-secondary-50 border-l-4 border-secondary-600"
            >
              <h3 className="text-xl font-semibold mb-3 text-secondary-700">Community-Centered</h3>
              <p className="text-gray-700">
                We believe in working with communities rather than for them, ensuring their needs and voices guide our initiatives.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-lg bg-success-50 border-l-4 border-success-600"
            >
              <h3 className="text-xl font-semibold mb-3 text-success-700">Transparency</h3>
              <p className="text-gray-700">
                We operate with integrity and openness, sharing our successes, challenges, and financial information with our stakeholders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;