import React, { useState } from 'react';
import { CreditCard, DollarSign, TrendingUp, Settings, Plus } from 'lucide-react';
// import { Expense, Category, CreditCard as CreditCardType, SpendingInsight } from './types';
import Dashboard from './components/Dashboard';
import ExpenseList from './components/ExpenseList';
import Categories from './components/Categories';
import CreditCards from './components/CreditCards';
import Insights from './components/Insights';

type Tab = 'dashboard' | 'expenses' | 'categories' | 'cards' | 'insights';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
    { id: 'expenses', label: 'Expenses', icon: DollarSign },
    { id: 'categories', label: 'Categories', icon: Settings },
    { id: 'cards', label: 'Cards', icon: CreditCard },
    { id: 'insights', label: 'Insights', icon: TrendingUp },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'expenses':
        return <ExpenseList />;
      case 'categories':
        return <Categories />;
      case 'cards':
        return <CreditCards />;
      case 'insights':
        return <Insights />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">ExpenseTracker</h1>
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              <Plus className="w-4 h-4 mr-2" />
              Add Expense
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as Tab)}
                  className={`flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
