import React, { useState } from 'react';
import { Plus, Edit2, Trash2, DollarSign, Target } from 'lucide-react';

const Categories: React.FC = () => {
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  // const [editingCategory, setEditingCategory] = useState<string | null>(null);

  // Mock category data
  const [categories] = useState([
    {
      id: '1',
      name: 'Food & Dining',
      icon: '🍽️',
      color: '#3b82f6',
      budget: 800,
      spent: 680,
      transactions: 45
    },
    {
      id: '2',
      name: 'Transportation',
      icon: '🚗',
      color: '#10b981',
      budget: 400,
      spent: 320,
      transactions: 23
    },
    {
      id: '3',
      name: 'Shopping',
      icon: '🛍️',
      color: '#f59e0b',
      budget: 500,
      spent: 450,
      transactions: 18
    },
    {
      id: '4',
      name: 'Entertainment',
      icon: '🎬',
      color: '#ef4444',
      budget: 200,
      spent: 180,
      transactions: 12
    },
    {
      id: '5',
      name: 'Utilities',
      icon: '⚡',
      color: '#8b5cf6',
      budget: 300,
      spent: 280,
      transactions: 8
    },
    {
      id: '6',
      name: 'Healthcare',
      icon: '🏥',
      color: '#ec4899',
      budget: 150,
      spent: 120,
      transactions: 5
    }
  ]);

  const getBudgetStatus = (spent: number, budget: number) => {
    const percentage = (spent / budget) * 100;
    if (percentage >= 90) return 'danger';
    if (percentage >= 75) return 'warning';
    return 'success';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'danger':
        return 'bg-red-500';
      case 'warning':
        return 'bg-yellow-500';
      default:
        return 'bg-green-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Expense Categories</h2>
          <p className="text-sm text-gray-600 mt-1">Manage your spending categories and budgets</p>
        </div>
        <button 
          onClick={() => setIsAddingCategory(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Category
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const budgetStatus = getBudgetStatus(category.spent, category.budget);
          const percentage = (category.spent / category.budget) * 100;
          
          return (
            <div key={category.id} className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div 
                    className="h-12 w-12 rounded-full flex items-center justify-center text-2xl"
                    style={{ backgroundColor: category.color + '20' }}
                  >
                    {category.icon}
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.transactions} transactions</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => console.log('Edit category:', category.id)}
                    className="p-1 text-gray-400 hover:text-gray-600"
                  >
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Budget Progress */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Budget Progress</span>
                  <span className="text-sm font-medium text-gray-900">
                    ${category.spent.toFixed(0)} / ${category.budget}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${getStatusColor(budgetStatus)}`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className={`text-xs font-medium ${
                    budgetStatus === 'danger' ? 'text-red-600' :
                    budgetStatus === 'warning' ? 'text-yellow-600' :
                    'text-green-600'
                  }`}>
                    {percentage.toFixed(1)}% used
                  </span>
                  <span className="text-xs text-gray-500">
                    ${(category.budget - category.spent).toFixed(0)} remaining
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <DollarSign className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-500">Average</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">
                    ${(category.spent / category.transactions).toFixed(0)}
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Target className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-500">Budget</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">
                    ${category.budget}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Budget Overview */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Budget Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">
              ${categories.reduce((sum, cat) => sum + cat.budget, 0)}
            </p>
            <p className="text-sm text-gray-500">Total Budget</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">
              ${categories.reduce((sum, cat) => sum + cat.spent, 0).toFixed(0)}
            </p>
            <p className="text-sm text-gray-500">Total Spent</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">
              ${(categories.reduce((sum, cat) => sum + cat.budget - cat.spent, 0)).toFixed(0)}
            </p>
            <p className="text-sm text-gray-500">Remaining</p>
          </div>
        </div>
      </div>

      {/* Add Category Modal (placeholder) */}
      {isAddingCategory && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Category</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Category Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    placeholder="e.g., Groceries"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Monthly Budget</label>
                  <input
                    type="number"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    placeholder="500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Icon</label>
                  <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500">
                    <option>🍽️ Food & Dining</option>
                    <option>🚗 Transportation</option>
                    <option>🛍️ Shopping</option>
                    <option>🎬 Entertainment</option>
                    <option>⚡ Utilities</option>
                    <option>🏥 Healthcare</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setIsAddingCategory(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700">
                  Add Category
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
