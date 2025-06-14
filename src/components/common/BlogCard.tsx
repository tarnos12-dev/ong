import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  image,
  date,
  author,
  category
}) => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card group h-full flex flex-col"
    >
      <Link to={`/blog/${id}`} className="block h-full">
        <div className="relative overflow-hidden h-56">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary-600 text-white text-sm px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <div className="flex items-center mr-4">
              <Calendar size={14} className="mr-1" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <User size={14} className="mr-1" />
              <span>{author}</span>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">{title}</h3>
          <p className="text-gray-600 mb-4 flex-grow">{excerpt}</p>
          <div className="mt-auto">
            <span className="text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
              {t('blog.readMore')}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;