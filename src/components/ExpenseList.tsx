import React, { useState } from 'react';
import { Search, Plus, Calendar, CreditCard } from 'lucide-react';
import { format } from 'date-fns';

const ExpenseList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock expense data
  const expenses = [
    {
      id: '1',
      amount: 45.50,
      description: 'Starbucks Coffee',
      category: { name: 'Food & Dining', color: '#3b82f6' },
      date: new Date('2024-01-15'),
      paymentMethod: 'credit_card' as const,
      merchant: 'Starbucks',
      tags: ['coffee', 'morning']
    },
    {
      id: '2',
      amount: 120.00,
      description: 'Uber Ride',
      category: { name: 'Transportation', color: '#10b981' },
      date: new Date('2024-01-14'),
      paymentMethod: 'credit_card' as const,
      merchant: 'Uber',
      tags: ['transport', 'ride']
    },
    {
      id: '3',
      amount: 89.99,
      description: 'Amazon Purchase',
      category: { name: 'Shopping', color: '#f59e0b' },
      date: new Date('2024-01-13'),
      paymentMethod: 'credit_card' as const,
      merchant: 'Amazon',
      tags: ['online', 'electronics']
    },
    {
      id: '4',
      amount: 25.00,
      description: 'Netflix Subscription',
      category: { name: 'Entertainment', color: '#ef4444' },
      date: new Date('2024-01-12'),
      paymentMethod: 'credit_card' as const,
      merchant: 'Netflix',
      tags: ['subscription', 'streaming']
    },
    {
      id: '5',
      amount: 180.00,
      description: 'Grocery Shopping',
      category: { name: 'Food & Dining', color: '#3b82f6' },
      date: new Date('2024-01-11'),
      paymentMethod: 'credit_card' as const,
      merchant: 'Whole Foods',
      tags: ['groceries', 'food']
    }
  ];

  const categories = ['all', 'Food & Dining', 'Transportation', 'Shopping', 'Entertainment', 'Utilities'];

  const filteredExpenses = expenses.filter(expense => {
    const matchesSearch = expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         expense.merchant.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || expense.category.name === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case 'credit_card':
        return <CreditCard className="h-4 w-4" />;
      case 'debit_card':
        return <CreditCard className="h-4 w-4" />;
      default:
        return <CreditCard className="h-4 w-4" />;
    }
  };

  const getPaymentMethodColor = (method: string) => {
    switch (method) {
      case 'credit_card':
        return 'text-blue-600';
      case 'debit_card':
        return 'text-green-600';
      case 'cash':
        return 'text-gray-600';
      case 'bank_transfer':
        return 'text-purple-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Expense History</h2>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
          <Plus className="w-4 h-4 mr-2" />
          Add Expense
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Search expenses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <select
              className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          {/* Date Filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="date"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>
      </div>

      {/* Expense List */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {filteredExpenses.map((expense) => (
            <li key={expense.id}>
              <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div 
                        className="h-10 w-10 rounded-full flex items-center justify-center text-white font-medium"
                        style={{ backgroundColor: expense.category.color }}
                      >
                        {expense.category.name.charAt(0)}
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center">
                        <p className="text-sm font-medium text-gray-900">
                          {expense.description}
                        </p>
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {expense.category.name}
                        </span>
                      </div>
                      <div className="flex items-center mt-1">
                        <p className="text-sm text-gray-500">{expense.merchant}</p>
                        <span className="mx-2 text-gray-300">•</span>
                        <div className={`flex items-center text-sm ${getPaymentMethodColor(expense.paymentMethod)}`}>
                          {getPaymentMethodIcon(expense.paymentMethod)}
                          <span className="ml-1 capitalize">{expense.paymentMethod.replace('_', ' ')}</span>
                        </div>
                        <span className="mx-2 text-gray-300">•</span>
                        <p className="text-sm text-gray-500">{format(expense.date, 'MMM d, yyyy')}</p>
                      </div>
                      {expense.tags.length > 0 && (
                        <div className="flex items-center mt-2">
                          {expense.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 mr-2"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-gray-900">
                      ${expense.amount.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">
              ${filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0).toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">Total Expenses</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">{filteredExpenses.length}</p>
            <p className="text-sm text-gray-500">Number of Transactions</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">
              ${filteredExpenses.length > 0 ? (filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0) / filteredExpenses.length).toFixed(2) : '0.00'}
            </p>
            <p className="text-sm text-gray-500">Average per Transaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
