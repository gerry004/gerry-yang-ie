export interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
  tags: string[];
}

export interface MonthlyData {
  totalIncome: number;
  totalExpense: number;
  cashflow: number;
  transactions: Transaction[];
  categoryTotals: {
    [key: string]: {
      income: number;
      expense: number;
    };
  };
}

const categories = [
  'Consulting',
  'Software Development',
  'Training',
  'Marketing',
  'Office',
  'Travel',
  'Utilities',
  'Subscriptions',
  'Equipment',
  'Salary'
];

const tags = [
  'Client A',
  'Client B',
  'Client C',
  'Remote',
  'On-site',
  'Recurring',
  'One-time',
  'Essential',
  'Investment'
];

// Generate transactions for the last 12 months
export const monthlyData: { [key: string]: MonthlyData } = {};
const months = Array.from({ length: 12 }, (_, i) => {
  const date = new Date();
  date.setMonth(date.getMonth() - i);
  return date.toISOString().slice(0, 7); // YYYY-MM format
}).reverse();

months.forEach(month => {
  const transactions: Transaction[] = [];
  const numTransactions = Math.floor(Math.random() * 20) + 30; // 30-50 transactions per month

  for (let i = 0; i < numTransactions; i++) {
    const isIncome = Math.random() > 0.6; // 40% income, 60% expenses
    const category = categories[Math.floor(Math.random() * categories.length)];
    const amount = isIncome
      ? Math.floor(Math.random() * 15000) + 5000 // Income: 5000-20000
      : Math.floor(Math.random() * 5000) + 100;  // Expense: 100-5100

    // Ensure unique tags by adding transaction index
    const selectedTags = Array.from(
      { length: Math.floor(Math.random() * 3) + 1 },
      (_, tagIndex) => {
        const baseTag = tags[Math.floor(Math.random() * tags.length)];
        return `${baseTag}-${month}-${i}-${tagIndex}`;
      }
    );

    transactions.push({
      id: parseInt(`${month.replace('-', '')}${i}`),
      date: `${month}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
      description: `${isIncome ? 'Payment from' : 'Payment for'} ${category}`,
      amount,
      type: isIncome ? 'income' : 'expense',
      category,
      tags: selectedTags
    });
  }

  // Calculate totals
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalExpense = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  // Calculate category totals
  const categoryTotals: { [key: string]: { income: number; expense: number } } = {};
  categories.forEach(category => {
    categoryTotals[category] = {
      income: transactions
        .filter(t => t.type === 'income' && t.category === category)
        .reduce((sum, t) => sum + t.amount, 0),
      expense: transactions
        .filter(t => t.type === 'expense' && t.category === category)
        .reduce((sum, t) => sum + t.amount, 0)
    };
  });

  monthlyData[month] = {
    totalIncome,
    totalExpense,
    cashflow: totalIncome - totalExpense,
    transactions: transactions.sort((a, b) => b.amount - a.amount),
    categoryTotals
  };
}); 