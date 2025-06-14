import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  discount?: number;
  onAddToCart?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  category,
  inStock,
  discount,
  onAddToCart
}) => {
  const { t } = useTranslation();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToCart) onAddToCart();
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
    }).format(value);
  };

  const discountedPrice = discount ? price * (1 - discount / 100) : price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="card h-full flex flex-col"
    >
      <Link to={`/products/${id}`} className="block h-full">
        <div className="relative overflow-hidden h-64">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          
          {/* Category Tag */}
          <div className="absolute top-4 left-4">
            <span className="bg-secondary-500 text-white text-sm px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
          
          {/* Discount Badge */}
          {discount && (
            <div className="absolute top-4 right-4">
              <span className="bg-accent-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                -{discount}%
              </span>
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
            <button
              onClick={handleAddToCart}
              disabled={!inStock}
              className={`p-3 rounded-full bg-white text-primary-600 hover:bg-primary-600 hover:text-white transition-colors ${
                !inStock ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <ShoppingCart size={20} />
            </button>
            <Link
              to={`/products/${id}`}
              className="p-3 rounded-full bg-white text-primary-600 hover:bg-primary-600 hover:text-white transition-colors"
            >
              <Eye size={20} />
            </Link>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          
          <div className="mt-2 flex items-center">
            <span className="text-lg font-bold text-gray-900">
              {formatPrice(discountedPrice)}
            </span>
            
            {discount && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                {formatPrice(price)}
              </span>
            )}
            
            {!inStock && (
              <span className="ml-auto text-sm font-medium text-accent-600">
                Out of stock
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;