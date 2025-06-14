import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ChevronLeft, ChevronRight, Facebook, Twitter, Linkedin } from 'lucide-react';

// Sample blog data (would come from database in real implementation)
const blogPosts = [
  {
    id: '1',
    title: 'Sustainable Farming Practices for Small Farmers',
    content: `
      <p>Sustainable farming practices are becoming increasingly important for small-scale farmers around the world. As climate change and environmental degradation continue to impact agricultural productivity, adopting sustainable methods is not just good for the planet but also beneficial for farmers' livelihoods.</p>
      
      <h2>Why Sustainable Farming Matters</h2>
      
      <p>For small farmers, sustainability means farming in ways that meet present needs without compromising the ability of future generations to meet their own needs. This involves practices that are environmentally sound, economically viable, and socially responsible.</p>
      
      <p>Key benefits of sustainable farming include:</p>
      
      <ul>
        <li>Improved soil health and fertility</li>
        <li>Reduced dependence on expensive inputs</li>
        <li>Enhanced biodiversity and ecosystem services</li>
        <li>Better resilience to climate change impacts</li>
        <li>Increased long-term productivity</li>
      </ul>
      
      <h2>Practical Techniques for Small Farmers</h2>
      
      <p>There are numerous sustainable farming techniques that small farmers can implement, even with limited resources:</p>
      
      <h3>1. Crop Rotation and Diversification</h3>
      
      <p>Rotating different crops on the same land helps prevent soil depletion and reduces pest and disease problems. Diversifying crops also spreads economic risk and improves household nutrition.</p>
      
      <h3>2. Integrated Pest Management (IPM)</h3>
      
      <p>IPM focuses on long-term prevention of pests through a combination of techniques such as biological control, habitat manipulation, and resistant crop varieties. This reduces the need for synthetic pesticides.</p>
      
      <h3>3. Water Conservation</h3>
      
      <p>Efficient irrigation systems like drip irrigation, rainwater harvesting, and mulching help conserve water resources while ensuring crops receive adequate moisture.</p>
      
      <h3>4. Organic Soil Amendments</h3>
      
      <p>Using compost, green manure, and other organic materials improves soil structure, fertility, and water-holding capacity without relying on synthetic fertilizers.</p>
      
      <h2>Success Stories from Our Communities</h2>
      
      <p>In the communities where Grace Divine NGO works, many farmers have successfully adopted sustainable practices with remarkable results:</p>
      
      <p>Mariam, a farmer from Louga region, increased her vegetable yields by 35% after implementing crop rotation and composting. Her income has improved, and she now spends less on fertilizers.</p>
      
      <p>A group of rice farmers in the Casamance region reduced their water usage by 40% through an improved irrigation system, while maintaining their production levels.</p>
      
      <h2>Getting Started with Sustainable Farming</h2>
      
      <p>For farmers looking to transition to more sustainable methods, we recommend starting small with one or two practices and gradually incorporating more over time. Our agricultural extension officers are available to provide training and support throughout this journey.</p>
      
      <p>Sustainable farming is not just about environmental stewardship—it's about creating resilient farming systems that can prosper in changing conditions while providing healthy food for communities.</p>
    `,
    excerpt: 'Learn about cost-effective and eco-friendly farming techniques that can increase yields and improve soil health.',
    image: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: 'June 12, 2023',
    author: 'Jean Claude Diop',
    authorRole: 'Agricultural Director',
    authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Agriculture',
    tags: ['sustainable farming', 'soil health', 'small farmers', 'organic techniques']
  }
];

// Related posts based on category
const relatedPosts = [
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
    id: '6',
    title: 'The Future of Agriculture: Technology and Tradition',
    excerpt: 'Balancing traditional farming wisdom with modern technology for sustainable and productive agriculture.',
    image: 'https://images.pexels.com/photos/5926287/pexels-photo-5926287.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: 'January 5, 2023',
    author: 'Marie Dubois',
    category: 'Innovation'
  }
];

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);
  
  if (!post) {
    return (
      <div className="pt-32 pb-16 min-h-screen bg-gray-50">
        <div className="container-custom text-center">
          <h1 className="text-2xl font-semibold mb-4">Blog Post Not Found</h1>
          <p className="mb-6">The article you are looking for does not exist or has been removed.</p>
          <Link to="/blog" className="btn btn-primary">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"></div>
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-white"
          >
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 bg-primary-500 text-white rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center text-white/90 text-sm md:text-base flex-wrap gap-4">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                <span>By {post.author}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Tags */}
              <div className="mt-8 flex flex-wrap items-center gap-2">
                <Tag size={18} className="text-gray-500" />
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Share */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="text-lg font-semibold mb-4">Share this article</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="mt-8 pt-8 border-t bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <img 
                    src={post.authorImage}
                    alt={post.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{post.author}</h3>
                    <p className="text-primary-600 mb-2">{post.authorRole}</p>
                    <p className="text-gray-600">
                      Jean Claude leads our agricultural initiatives and training programs. With over 15 years of experience in sustainable farming practices, he works directly with farmers to implement effective techniques that improve yields while preserving the environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Recent Posts */}
                <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map(relatedPost => (
                      <div key={relatedPost.id} className="flex gap-4">
                        <img 
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                        />
                        <div>
                          <h4 className="font-medium text-base line-clamp-2">
                            <Link 
                              to={`/blog/${relatedPost.id}`}
                              className="hover:text-primary-600 transition-colors"
                            >
                              {relatedPost.title}
                            </Link>
                          </h4>
                          <p className="text-sm text-gray-500 mt-1">{relatedPost.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Categories */}
                <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link 
                        to="/blog" 
                        className="flex justify-between items-center text-gray-700 hover:text-primary-600 transition-colors"
                      >
                        <span>Agriculture</span>
                        <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">12</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/blog" 
                        className="flex justify-between items-center text-gray-700 hover:text-primary-600 transition-colors"
                      >
                        <span>Education</span>
                        <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">8</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/blog" 
                        className="flex justify-between items-center text-gray-700 hover:text-primary-600 transition-colors"
                      >
                        <span>Infrastructure</span>
                        <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">5</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/blog" 
                        className="flex justify-between items-center text-gray-700 hover:text-primary-600 transition-colors"
                      >
                        <span>Economic Development</span>
                        <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">7</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/blog" 
                        className="flex justify-between items-center text-gray-700 hover:text-primary-600 transition-colors"
                      >
                        <span>Innovation</span>
                        <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">4</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                
                {/* Newsletter */}
                <div className="p-6 bg-primary-50 rounded-lg border border-primary-100">
                  <h3 className="text-xl font-semibold mb-4 text-primary-800">Subscribe to Our Newsletter</h3>
                  <p className="text-gray-600 mb-4">
                    Stay updated with our latest articles and projects.
                  </p>
                  <form>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 mb-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                    <button className="w-full btn btn-primary">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </aside>
          </div>
          
          {/* Post Navigation */}
          <div className="mt-12 pt-8 border-t grid grid-cols-2 gap-4">
            <Link 
              to="/blog" 
              className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
            >
              <ChevronLeft size={20} className="mr-1" />
              Previous Post
            </Link>
            <Link 
              to="/blog" 
              className="flex items-center justify-end text-gray-600 hover:text-primary-600 transition-colors"
            >
              Next Post
              <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;