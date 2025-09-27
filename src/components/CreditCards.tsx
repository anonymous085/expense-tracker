import React, { useState } from 'react';
import { CreditCard, Plus, Link, Unlink, AlertTriangle, CheckCircle } from 'lucide-react';

const CreditCards: React.FC = () => {
  const [isAddingCard, setIsAddingCard] = useState(false);

  // Mock credit card data
  const [cards] = useState([
    {
      id: '1',
      name: 'Chase Sapphire Preferred',
      provider: 'Chase',
      last4: '4532',
      balance: 1240.75,
      limit: 5000,
      dueDate: new Date('2024-02-15'),
      isConnected: true,
      color: '#1e40af'
    },
    {
      id: '2',
      name: 'Capital One Venture',
      provider: 'Capital One',
      last4: '7890',
      balance: 856.25,
      limit: 3000,
      dueDate: new Date('2024-02-22'),
      isConnected: true,
      color: '#059669'
    },
    {
      id: '3',
      name: 'American Express Gold',
      provider: 'American Express',
      last4: '1234',
      balance: 0,
      limit: 8000,
      dueDate: new Date('2024-02-28'),
      isConnected: false,
      color: '#dc2626'
    }
  ]);

  const getUtilizationPercentage = (balance: number, limit: number) => {
    return (balance / limit) * 100;
  };

  const getUtilizationStatus = (percentage: number) => {
    if (percentage >= 80) return 'danger';
    if (percentage >= 60) return 'warning';
    return 'success';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'danger':
        return 'text-red-600 bg-red-100';
      case 'warning':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-green-600 bg-green-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'danger':
        return <AlertTriangle className="h-4 w-4" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <CheckCircle className="h-4 w-4" />;
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Credit Cards</h2>
          <p className="text-sm text-gray-600 mt-1">Manage your credit cards and track balances</p>
        </div>
        <button 
          onClick={() => setIsAddingCard(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Card
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => {
          const utilization = getUtilizationPercentage(card.balance, card.limit);
          const status = getUtilizationStatus(utilization);
          
          return (
            <div key={card.id} className="bg-white shadow rounded-lg overflow-hidden">
              {/* Card Visual */}
              <div 
                className="h-32 p-6 text-white relative"
                style={{ backgroundColor: card.color }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm opacity-80">{card.provider}</p>
                    <p className="text-lg font-medium">{card.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm opacity-80">**** {card.last4}</p>
                    <div className={`mt-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
                      {getStatusIcon(status)}
                      <span className="ml-1">
                        {card.isConnected ? 'Connected' : 'Not Connected'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <CreditCard className="h-8 w-8 opacity-60" />
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6">
                <div className="space-y-4">
                  {/* Balance */}
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-500">Current Balance</span>
                      <span className="text-lg font-semibold text-gray-900">
                        ${card.balance.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Credit Limit */}
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-500">Credit Limit</span>
                      <span className="text-sm text-gray-900">
                        ${card.limit.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Utilization */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-500">Utilization</span>
                      <span className={`text-sm font-medium ${
                        status === 'danger' ? 'text-red-600' :
                        status === 'warning' ? 'text-yellow-600' :
                        'text-green-600'
                      }`}>
                        {utilization.toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          status === 'danger' ? 'bg-red-500' :
                          status === 'warning' ? 'bg-yellow-500' :
                          'bg-green-500'
                        }`}
                        style={{ width: `${Math.min(utilization, 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Due Date */}
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-500">Due Date</span>
                      <span className="text-sm text-gray-900">
                        {formatDate(card.dueDate)}
                      </span>
                    </div>
                  </div>

                  {/* Available Credit */}
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-500">Available Credit</span>
                      <span className="text-sm text-gray-900">
                        ${(card.limit - card.balance).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex space-x-3">
                  {card.isConnected ? (
                    <button className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                      <Unlink className="h-4 w-4 mr-2" />
                      Disconnect
                    </button>
                  ) : (
                    <button className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                      <Link className="h-4 w-4 mr-2" />
                      Connect
                    </button>
                  )}
                  <button className="px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Credit Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">
              ${cards.reduce((sum, card) => sum + card.balance, 0).toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">Total Balance</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">
              ${cards.reduce((sum, card) => sum + card.limit, 0).toLocaleString()}
            </p>
            <p className="text-sm text-gray-500">Total Credit Limit</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">
              {((cards.reduce((sum, card) => sum + card.balance, 0) / cards.reduce((sum, card) => sum + card.limit, 0)) * 100).toFixed(1)}%
            </p>
            <p className="text-sm text-gray-500">Overall Utilization</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">
              ${cards.reduce((sum, card) => sum + card.limit - card.balance, 0).toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">Available Credit</p>
          </div>
        </div>
      </div>

      {/* Add Card Modal (placeholder) */}
      {isAddingCard && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Credit Card</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Card Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    placeholder="e.g., Chase Sapphire Preferred"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Provider</label>
                  <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500">
                    <option>Chase</option>
                    <option>Capital One</option>
                    <option>American Express</option>
                    <option>Citi</option>
                    <option>Bank of America</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Credit Limit</label>
                  <input
                    type="number"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    placeholder="5000"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setIsAddingCard(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700">
                  Add Card
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditCards;
