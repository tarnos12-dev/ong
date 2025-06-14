import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronRight, Minus, Plus, ShoppingCart, Heart, Share2 } from 'lucide-react';

// Sample product data (would come from database in real implementation)
const products = [
  {
    id: '1',
    name: 'Organic Rice (5kg)',
    price: 2500,
    image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Grains',
    inStock: true,
    description: 'Our organic rice is grown without chemical pesticides or fertilizers. Sourced directly from local farmers who use traditional farming methods to preserve soil health and biodiversity.',
    details: [
      'Grown by certified organic farmers',
      'No chemical pesticides or fertilizers',
      'Supports sustainable farming practices',
      'High in nutrients and natural flavor'
    ],
    nutritionalInfo: {
      calories: '130 kcal per 100g',
      protein: '2.7g per 100g',
      carbs: '28g per 100g',
      fat: '0.3g per 100g'
    }
  },
  {
    id: '2',
    name: 'Fresh Cassava (Bundle)',
    price: 3000,
    image: 'https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Vegetables',
    inStock: true,
    discount: 10,
    description: 'Fresh cassava roots harvested at peak ripeness from our community farms. An excellent source of carbohydrates and a versatile ingredient for many traditional dishes.',
    details: [
      'Freshly harvested from local farms',
      'Excellent source of dietary fiber',
      'Rich in vitamins and minerals',
      'Perfect for traditional recipes'
    ],
    nutritionalInfo: {
      calories: '160 kcal per 100g',
      protein: '1.4g per 100g',
      carbs: '38g per 100g',
      fat: '0.3g per 100g'
    }
  }
];

const ProductDetailPage: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  
  if (!product) {
    return (
      <div className="pt-32 pb-16 min-h-screen bg-gray-50">
        <div className="container-custom text-center">
          <h1 className="text-2xl font-semibold mb-4">Product Not Found</h1>
          <p className="mb-6">The product you are looking for does not exist or has been removed.</p>
          <Link to="/products" className="btn btn-primary">
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // In a real implementation, this would add the product to the cart
    console.log(`Added ${quantity} of product ${product.id} to cart`);
  };

  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100) 
    : product.price;
    
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
    }).format(value);
  };

  // Calculate the total price based on quantity
  const totalPrice = discountedPrice * quantity;

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-100 pt-32 pb-4">
        <div className="container-custom">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="text-gray-600 hover:text-primary-600">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                  <Link to="/products" className="ml-1 text-gray-600 hover:text-primary-600">
                    Products
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                  <span className="ml-1 text-gray-500">{product.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-auto object-cover rounded-lg" 
                />
              </div>
              
              {/* Category Tag */}
              <div className="absolute top-8 left-8">
                <span className="bg-secondary-500 text-white text-sm px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              
              {/* Discount Badge */}
              {product.discount && (
                <div className="absolute top-8 right-8">
                  <span className="bg-accent-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                    -{product.discount}%
                  </span>
                </div>
              )}
            </motion.div>
            
            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">
                  {formatPrice(discountedPrice)}
                </span>
                
                {product.discount && (
                  <span className="ml-2 text-lg text-gray-500 line-through">
                    {formatPrice(product.price)}
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              {/* Stock Status */}
              <div className="mb-6">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  product.inStock 
                    ? 'bg-success-100 text-success-800' 
                    : 'bg-accent-100 text-accent-800'
                }`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className={`p-2 border border-gray-300 rounded-l-md ${
                      quantity <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                    }`}
                  >
                    <Minus size={16} />
                  </button>
                  <input
                    type="text"
                    readOnly
                    value={quantity}
                    className="w-16 text-center border-t border-b border-gray-300 py-2"
                  />
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 border border-gray-300 rounded-r-md hover:bg-gray-100"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              
              {/* Total Price */}
              <div className="mb-6">
                <span className="text-sm font-medium text-gray-700">Total:</span>
                <span className="ml-2 text-xl font-bold text-primary-600">
                  {formatPrice(totalPrice)}
                </span>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`btn ${
                    product.inStock 
                      ? 'btn-primary' 
                      : 'bg-gray-300 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="mr-2" size={18} />
                  {t('products.addToCart')}
                </button>
                
                <button className="btn border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                  <Heart className="mr-2" size={18} />
                  Wishlist
                </button>
                
                <button className="btn border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                  <Share2 className="mr-2" size={18} />
                  Share
                </button>
              </div>
              
              {/* Product Details Tabs */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex border-b">
                  <button
                    className={`px-4 py-2 font-medium ${
                      activeTab === 'description'
                        ? 'text-primary-600 border-b-2 border-primary-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('description')}
                  >
                    Description
                  </button>
                  <button
                    className={`px-4 py-2 font-medium ${
                      activeTab === 'details'
                        ? 'text-primary-600 border-b-2 border-primary-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('details')}
                  >
                    Details
                  </button>
                  <button
                    className={`px-4 py-2 font-medium ${
                      activeTab === 'nutrition'
                        ? 'text-primary-600 border-b-2 border-primary-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('nutrition')}
                  >
                    Nutrition
                  </button>
                </div>
                
                <div className="pt-4">
                  {activeTab === 'description' && (
                    <div>
                      <p className="text-gray-600">{product.description}</p>
                    </div>
                  )}
                  
                  {activeTab === 'details' && (
                    <div>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        {product.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {activeTab === 'nutrition' && (
                    <div>
                      <ul className="space-y-2 text-gray-600">
                        <li><span className="font-medium">Calories:</span> {product.nutritionalInfo.calories}</li>
                        <li><span className="font-medium">Protein:</span> {product.nutritionalInfo.protein}</li>
                        <li><span className="font-medium">Carbohydrates:</span> {product.nutritionalInfo.carbs}</li>
                        <li><span className="font-medium">Fat:</span> {product.nutritionalInfo.fat}</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== product.id)
              .map(relatedProduct => (
                <div key={relatedProduct.id} className="card group">
                  <Link to={`/products/${relatedProduct.id}`} className="block">
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {relatedProduct.discount && (
                        <div className="absolute top-2 right-2">
                          <span className="bg-accent-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                            -{relatedProduct.discount}%
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-semibold group-hover:text-primary-600 transition-colors">
                        {relatedProduct.name}
                      </h3>
                      
                      <div className="mt-2">
                        <span className="font-bold text-gray-900">
                          {formatPrice(relatedProduct.discount 
                            ? relatedProduct.price * (1 - relatedProduct.discount / 100) 
                            : relatedProduct.price)}
                        </span>
                        
                        {relatedProduct.discount && (
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            {formatPrice(relatedProduct.price)}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailPage;