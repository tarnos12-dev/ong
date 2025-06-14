import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Users, ShoppingBag, DollarSign, ChevronDown } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('orders');

  // Sample data - would come from backend in real implementation
  const orders = [
    {
      id: 'ORD001',
      customer: 'John Doe',
      date: '2024-02-20',
      total: 25000,
      status: 'pending',
      items: [
        { name: 'Organic Rice (5kg)', quantity: 2, price: 2500 },
        { name: 'Fresh Cassava (Bundle)', quantity: 1, price: 3000 }
      ]
    },
    {
      id: 'ORD002',
      customer: 'Jane Smith',
      date: '2024-02-19',
      total: 45000,
      status: 'completed',
      items: [
        { name: 'Pure Honey (500ml)', quantity: 3, price: 4500 },
        { name: 'Organic Plantains (Dozen)', quantity: 2, price: 1800 }
      ]
    }
  ];

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Dashboard Header */}
      <div className="bg-white shadow">
        <div className="container-custom py-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container-custom py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center">
              <div className="p-3 bg-primary-100 rounded-lg">
                <Package className="h-6 w-6 text-primary-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Orders</p>
                <h3 className="text-xl font-bold text-gray-900">156</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center">
              <div className="p-3 bg-secondary-100 rounded-lg">
                <Users className="h-6 w-6 text-secondary-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Customers</p>
                <h3 className="text-xl font-bold text-gray-900">89</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center">
              <div className="p-3 bg-success-100 rounded-lg">
                <ShoppingBag className="h-6 w-6 text-success-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Products</p>
                <h3 className="text-xl font-bold text-gray-900">32</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center">
              <div className="p-3 bg-warning-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-warning-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Revenue</p>
                <h3 className="text-xl font-bold text-gray-900">{formatPrice(1250000)}</h3>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Orders Section */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-gray-200">
                    <th className="pb-3 font-semibold text-gray-600">Order ID</th>
                    <th className="pb-3 font-semibold text-gray-600">Customer</th>
                    <th className="pb-3 font-semibold text-gray-600">Date</th>
                    <th className="pb-3 font-semibold text-gray-600">Total</th>
                    <th className="pb-3 font-semibold text-gray-600">Status</th>
                    <th className="pb-3 font-semibold text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b border-gray-100">
                      <td className="py-4 text-gray-800">{order.id}</td>
                      <td className="py-4 text-gray-800">{order.customer}</td>
                      <td className="py-4 text-gray-600">{order.date}</td>
                      <td className="py-4 text-gray-800">{formatPrice(order.total)}</td>
                      <td className="py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          order.status === 'completed'
                            ? 'bg-success-100 text-success-800'
                            : 'bg-warning-100 text-warning-800'
                        }`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </td>
                      <td className="py-4">
                        <button className="text-primary-600 hover:text-primary-700">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;