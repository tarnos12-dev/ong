import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import BlogCard from '../components/common/BlogCard';

// Sample blog data (would come from database in real implementation)
const blogPosts = [
  {
    id: '1',
    title: 'Sustainable Farming Practices for Small Farmers',
    excerpt: 'Learn about cost-effective and eco-friendly farming techniques that can increase yields and improve soil health.',
    image: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: 'June 12, 2023',
    author: 'Jean Claude Diop',
    category: 'Agriculture'
  },
  {
    id: '2',
    title: 'The Importance of Clean Water for Agricultural Communities',
    excerpt: 'Access to clean water is vital for both farming and household use. Here\'s how we\'re addressing water challenges.',
    image: 'https://images.pexels.com/photos/2860705/pexels-photo-2860705.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: 'May 28, 2023',
    author: 'Marie Dubois',
    category: 'Infrastructure'
  },
  {
    id: '3',
    title: 'Women in Agriculture: Breaking Barriers',
    excerpt: 'Discover how women farmers are overcoming challenges and becoming leaders in their communities.',
    image: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: 'April 15, 2023',
    author: 'Fatima Bamba',
    category: 'Education'
  },
  {
    id: '4',
    title: 'Organic Farming: Better for Health and Environment',
    excerpt: 'The benefits of organic farming extend beyond healthier food to environmental sustainability and biodiversity.',
    image: 'https://images.pexels.com/photos/5231141/pexels-photo-5231141.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: 'March 22, 2023',
    author: 'Paul Mensah',
    category: 'Agriculture'
  },
  {
    id: '5',
    title: 'Market Access: Connecting Farmers to Consumers',
    excerpt: 'How we\'re bridging the gap between rural farmers and urban markets to ensure fair prices and steady income.',
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: 'February 10, 2023',
    author: 'Jean Claude Diop',
    category: 'Economic Development'
  },
  {
    id: '6',
    title: 'The Future of Agriculture: Technology and Tradition',
    excerpt: 'Balancing traditional farming wisdom with modern technology for sustainable and productive agriculture.',
    image: 'https://images.pexels.com/photos/5926287/pexels-photo-5926287.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: 'January 5, 2023',
    author: 'Marie Dubois',
    category: 'Innovation'
  }
];

const BlogPage: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term) {
      const filtered = blogPosts.filter(post => 
        post.title.toLowerCase().includes(term.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(term.toLowerCase()) || 
        post.category.toLowerCase().includes(term.toLowerCase()) ||
        post.author.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(blogPosts);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('blog.title')}
            </h1>
            <p className="text-xl text-white/90">
              {t('blog.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          {/* Search Bar */}
          <div className="mb-12 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
          
          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="grid md:grid-cols-2 gap-8 bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="h-full">
                  <img 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-8 flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                      {filteredPosts[0].category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{filteredPosts[0].title}</h2>
                  <p className="text-gray-600 mb-4">{filteredPosts[0].excerpt}</p>
                  <div className="text-sm text-gray-500 mb-6">
                    {filteredPosts[0].date} • By {filteredPosts[0].author}
                  </div>
                  <div className="mt-auto">
                    <a 
                      href={`/blog/${filteredPosts[0].id}`} 
                      className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                    >
                      {t('blog.readMore')}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {/* All Posts */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post) => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                  date={post.date}
                  author={post.author}
                  category={post.category}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No blog posts found matching your search.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilteredPosts(blogPosts);
                }}
                className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-8">
                Stay updated with our latest news, projects, and agricultural insights. We'll never share your email with anyone else.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full sm:flex-grow px-4 py-3 border border-gray-300 rounded-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <button className="w-full sm:w-auto btn btn-primary sm:rounded-l-none">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;