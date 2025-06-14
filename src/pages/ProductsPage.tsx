import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import ProductCard from '../components/common/ProductCard';

// Sample product data (would come from database in real implementation)
const products = [
  {
    id: '1',
    name: 'Organic Rice (5kg)',
    price: 2500,
    image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Grains',
    inStock: true,
  },
  {
    id: '2',
    name: 'Fresh Cassava (Bundle)',
    price: 3000,
    image: 'https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Vegetables',
    inStock: true,
    discount: 10,
  },
  {
    id: '3',
    name: 'Organic Plantains (Dozen)',
    price: 1800,
    image: 'https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Fruits',
    inStock: true,
  },
  {
    id: '4',
    name: 'Pure Honey (500ml)',
    price: 4500,
    image: 'https://images.pexels.com/photos/162827/honey-sweet-syrup-organic-162827.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Processed',
    inStock: true,
  },
  {
    id: '5',
    name: 'Fresh Tomatoes (1kg)',
    price: 1200,
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Vegetables',
    inStock: true,
  },
  {
    id: '6',
    name: 'Millet (3kg)',
    price: 1800,
    image: 'https://images.pexels.com/photos/5908198/pexels-photo-5908198.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Grains',
    inStock: false,
  },
  {
    id: '7',
    name: 'Fresh Oranges (Dozen)',
    price: 1500,
    image: 'https://images.pexels.com/photos/2294477/pexels-photo-2294477.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Fruits',
    inStock: true,
    discount: 15,
  },
  {
    id: '8',
    name: 'Palm Oil (1L)',
    price: 3500,
    image: 'https://images.pexels.com/photos/5865196/pexels-photo-5865196.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Processed',
    inStock: true,
  },
];

const ProductsPage: React.FC = () => {
  const { t } = useTranslation();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    { id: 'all', name: t('products.filter.all') },
    { id: 'Vegetables', name: t('products.filter.vegetables') },
    { id: 'Fruits', name: t('products.filter.fruits') },
    { id: 'Grains', name: t('products.filter.grains') },
    { id: 'Processed', name: t('products.filter.processed') },
  ];

  // Filter products based on category and search term
  useEffect(() => {
    let result = products;
    
    // Apply category filter
    if (activeFilter !== 'all') {
      result = result.filter(product => product.category === activeFilter);
    }
    
    // Apply search filter
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(lowercasedTerm) || 
        product.category.toLowerCase().includes(lowercasedTerm)
      );
    }
    
    setFilteredProducts(result);
  }, [activeFilter, searchTerm]);

  const handleFilterChange = (categoryId: string) => {
    setActiveFilter(categoryId);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleAddToCart = (productId: string) => {
    // In a real implementation, this would add the product to the cart
    console.log(`Added product ${productId} to cart`);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('products.title')}
            </h1>
            <p className="text-xl text-white/90">
              {t('products.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          {/* Search and Filter Controls */}
          <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            {/* Mobile Filter Toggle */}
            <button
              className="md:hidden flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter size={18} />
              <span>Filters</span>
            </button>
            
            {/* Desktop Category Filters */}
            <div className="hidden md:flex space-x-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleFilterChange(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeFilter === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile Filters (Expandable) */}
          {isFilterOpen && (
            <div className="md:hidden mb-6 p-4 bg-white rounded-lg shadow-sm">
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => handleFilterChange(category.id)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                      activeFilter === category.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                  inStock={product.inStock}
                  discount={product.discount}
                  onAddToCart={() => handleAddToCart(product.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No products found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('all');
                }}
                className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductsPage;