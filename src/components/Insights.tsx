import React, { useState } from 'react';
import { TrendingUp, AlertTriangle, Lightbulb, Target, DollarSign } from 'lucide-react';

const Insights: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');

  // Mock insights data
  const insights = [
    {
      id: 1,
      type: 'trend',
      title: 'Spending Increased by 12%',
      description: 'Your spending has increased by $357 compared to last month. Food & Dining and Shopping categories showed the biggest increases.',
      severity: 'medium' as const,
      icon: TrendingUp,
      action: 'Review your budget allocations',
      impact: 'medium'
    },
    {
      id: 2,
      type: 'budget',
      title: 'Food Budget Nearly Exceeded',
      description: 'You\'ve used 90% of your food budget for this month. Consider reducing dining out expenses.',
      severity: 'high' as const,
      icon: AlertTriangle,
      action: 'Adjust spending or increase budget',
      impact: 'high'
    },
    {
      id: 3,
      type: 'recommendation',
      title: 'Credit Card Utilization High',
      description: 'Your credit card utilization is at 68%. Paying down balances can improve your credit score.',
      severity: 'medium' as const,
      icon: Target,
      action: 'Consider making additional payments',
      impact: 'medium'
    },
    {
      id: 4,
      type: 'opportunity',
      title: 'Save on Transportation',
      description: 'You could save $150/month by using public transport 2 days per week instead of ride-sharing.',
      severity: 'low' as const,
      icon: Lightbulb,
      action: 'Try public transport alternatives',
      impact: 'low'
    },
    {
      id: 5,
      type: 'anomaly',
      title: 'Unusual Spending Pattern',
      description: 'You spent $320 on entertainment this week, which is 200% above your average.',
      severity: 'high' as const,
      icon: AlertTriangle,
      action: 'Review recent entertainment expenses',
      impact: 'high'
    },
    {
      id: 6,
      type: 'achievement',
      title: 'Budget Goal Achieved',
      description: 'Congratulations! You stayed within your utilities budget for the third month in a row.',
      severity: 'low' as const,
      icon: Target,
      action: 'Keep up the great work!',
      impact: 'positive'
    }
  ];

  // const getInsightIcon = (type: string) => {
  //   switch (type) {
  //     case 'trend':
  //       return TrendingUp;
  //     case 'budget':
  //       return AlertTriangle;
  //     case 'recommendation':
  //       return Target;
  //     case 'opportunity':
  //       return Lightbulb;
  //     case 'anomaly':
  //       return AlertTriangle;
  //     case 'achievement':
  //       return Target;
  //     default:
  //       return Lightbulb;
  //   }
  // };

  const getSeverityColor = (severity: string, impact?: string) => {
    if (impact === 'positive') return 'text-green-600 bg-green-100';
    if (severity === 'high') return 'text-red-600 bg-red-100';
    if (severity === 'medium') return 'text-yellow-600 bg-yellow-100';
    return 'text-blue-600 bg-blue-100';
  };

  const getInsightTypeColor = (type: string) => {
    switch (type) {
      case 'trend':
        return 'border-blue-200 bg-blue-50';
      case 'budget':
        return 'border-yellow-200 bg-yellow-50';
      case 'recommendation':
        return 'border-purple-200 bg-purple-50';
      case 'opportunity':
        return 'border-green-200 bg-green-50';
      case 'anomaly':
        return 'border-red-200 bg-red-50';
      case 'achievement':
        return 'border-green-200 bg-green-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  const filteredInsights = insights; // In a real app, this would filter based on timeframe

  // const insightsByType = insights.reduce((acc, insight) => {
  //   if (!acc[insight.type]) acc[insight.type] = [];
  //   acc[insight.type].push(insight);
  //   return acc;
  // }, {} as Record<string, typeof insights>);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Insights & Analytics</h2>
          <p className="text-sm text-gray-600 mt-1">AI-powered insights to help you manage your finances better</p>
        </div>
        <select
          value={selectedTimeframe}
          onChange={(e) => setSelectedTimeframe(e.target.value)}
          className="block w-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
          <option value="1y">Last year</option>
        </select>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-green-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    High Priority Insights
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {insights.filter(i => i.severity === 'high').length}
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
                <Target className="h-6 w-6 text-blue-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Recommendations
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {insights.filter(i => i.type === 'recommendation' || i.type === 'opportunity').length}
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
                <AlertTriangle className="h-6 w-6 text-yellow-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Budget Alerts
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {insights.filter(i => i.type === 'budget').length}
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
                <DollarSign className="h-6 w-6 text-purple-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Potential Savings
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    $450
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insights by Category */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* High Priority Insights */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">High Priority</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {insights.filter(i => i.severity === 'high').map((insight) => {
              const Icon = insight.icon;
              return (
                <div key={insight.id} className="p-6">
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 p-2 rounded-full ${getSeverityColor(insight.severity)}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="text-sm font-medium text-gray-900">{insight.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{insight.description}</p>
                      <div className="mt-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                          {insight.action}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Recommendations</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {insights.filter(i => i.type === 'recommendation' || i.type === 'opportunity').map((insight) => {
              const Icon = insight.icon;
              return (
                <div key={insight.id} className="p-6">
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 p-2 rounded-full ${getSeverityColor(insight.severity, insight.impact)}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="text-sm font-medium text-gray-900">{insight.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{insight.description}</p>
                      <div className="mt-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {insight.action}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* All Insights */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">All Insights</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {filteredInsights.map((insight) => {
            const Icon = insight.icon;
            return (
              <div key={insight.id} className={`p-6 border-l-4 ${getInsightTypeColor(insight.type)}`}>
                <div className="flex items-start">
                  <div className={`flex-shrink-0 p-2 rounded-full ${getSeverityColor(insight.severity, insight.impact)}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-gray-900">{insight.title}</h4>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        insight.severity === 'high' ? 'bg-red-100 text-red-800' :
                        insight.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {insight.type.charAt(0).toUpperCase() + insight.type.slice(1)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{insight.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                        {insight.action}
                      </span>
                      <span className="text-xs text-gray-400">
                        {insight.impact === 'positive' ? 'Positive Impact' : `${insight.impact} Impact`}
                      </span>
                    </div>
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

export default Insights;
