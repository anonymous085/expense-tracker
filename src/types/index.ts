export interface Expense {
  id: string;
  amount: number;
  description: string;
  category: Category;
  date: Date;
  paymentMethod: 'credit_card' | 'debit_card' | 'cash' | 'bank_transfer';
  merchant: string;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  budget?: number;
}

export interface CreditCard {
  id: string;
  name: string;
  provider: string;
  last4: string;
  balance: number;
  limit: number;
  dueDate: Date;
  isConnected: boolean;
}

export interface SpendingInsight {
  id: string;
  type: 'trend' | 'budget' | 'recommendation' | 'anomaly';
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
  actionRequired?: boolean;
}

export interface MonthlyStats {
  totalSpent: number;
  budgetUsed: number;
  topCategories: Array<{
    category: Category;
    amount: number;
    percentage: number;
  }>;
  dailySpending: Array<{
    date: string;
    amount: number;
  }>;
}
