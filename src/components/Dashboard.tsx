import React from 'react';
import { DollarSign, TrendingUp, CreditCard, AlertTriangle } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard: React.FC = () => {
  // Mock data for demonstration
  const monthlyStats = {
    totalSpent: 3247.50,
    budgetUsed: 85,
    previousMonth: 2890.25,
    creditCardBalance: 1240.75,
    creditCardLimit: 5000
  };

  const categoryData = [
    { name: 'Food & Dining', value: 850, color: '#3b82f6' },
    { name: 'Transportation', value: 420, color: '#10b981' },
    { name: 'Shopping', value: 680, color: '#f59e0b' },
    { name: 'Entertainment', value: 320, color: '#ef4444' },
    { name: 'Utilities', value: 280, color: '#8b5cf6' },
    { name: 'Others', value: 697.50, color: '#6b7280' }
  ];

  const dailySpending = [
    { day: 'Mon', amount: 45 },
    { day: 'Tue', amount: 78 },
    { day: 'Wed', amount: 120 },
    { day: 'Thu', amount: 95 },
    { day: 'Fri', amount: 150 },
    { day: 'Sat', amount: 200 },
    { day: 'Sun', amount: 85 }
  ];

  const insights = [
    {
      id: 1,
      type: 'trend',
      title: 'Spending Up 12%',
      description: 'You spent $357 more this month compared to last month',
      severity: 'medium' as const,
      icon: TrendingUp
    },
    {
      id: 2,
      type: 'budget',
      title: 'Food Budget Alert',
      description: 'You\'ve used 90% of your food budget for this month',
      severity: 'high' as const,
      icon: AlertTriangle
    },
    {
      id: 3,
      type: 'recommendation',
      title: 'Credit Card Utilization',
      description: 'Consider paying down your credit card to improve your score',
      severity: 'low' as const,
      icon: CreditCard
    }
  ];

  const spendingChange = ((monthlyStats.totalSpent - monthlyStats.previousMonth) / monthlyStats.previousMonth) * 100;

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <DollarSign className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Spent
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      ${monthlyStats.totalSpent.toFixed(2)}
                    </div>
                    <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                      spendingChange > 0 ? 'text-red-600' : 'text-green-600'
                    }`}>
                      {spendingChange > 0 ? '+' : ''}{spendingChange.toFixed(1)}%
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Budget Used
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      {monthlyStats.budgetUsed}%
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CreditCard className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Credit Card Balance
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      ${monthlyStats.creditCardBalance.toFixed(2)}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Credit Utilization
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      {((monthlyStats.creditCardBalance / monthlyStats.creditCardLimit) * 100).toFixed(1)}%
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Spending by Category */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Spending by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={(entry: any) => `${entry.name} ${(entry.percent * 100).toFixed(0)}%`}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Daily Spending Trend */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Daily Spending Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dailySpending}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Insights & Recommendations</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {insights.map((insight) => {
            const Icon = insight.icon;
            return (
              <div key={insight.id} className="p-6">
                <div className="flex items-start">
                  <div className={`flex-shrink-0 p-2 rounded-full ${
                    insight.severity === 'high' ? 'bg-red-100' :
                    insight.severity === 'medium' ? 'bg-yellow-100' :
                    'bg-blue-100'
                  }`}>
                    <Icon className={`h-5 w-5 ${
                      insight.severity === 'high' ? 'text-red-600' :
                      insight.severity === 'medium' ? 'text-yellow-600' :
                      'text-blue-600'
                    }`} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-900">{insight.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{insight.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
