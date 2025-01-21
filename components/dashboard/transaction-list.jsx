import TransactionItem from './transaction-item';

export default function TransactionList() {
  const transactions = [
    { id: 1, name: 'Spotify', amount: -15.00, status: 'Processing', date: 'Wed 1:00pm', category: 'Subscriptions', icon: '🎵' },
    { id: 2, name: 'Alexa Doe', amount: 88.00, status: 'Success', date: 'Wed 2:45am', category: 'Deposit', icon: '👤' },
    { id: 3, name: 'Figma', amount: -18.99, status: 'Processing', date: 'Tue 6:10pm', category: 'Income', icon: '🎨' },
    { id: 4, name: 'Fresh F&V', amount: -88.00, status: 'Success', date: 'Tue 12:15pm', category: 'Groceries', icon: '🥬' },
    { id: 5, name: 'Sam Sulek', amount: -40.20, status: 'Declined', date: 'Tue 5:40am', category: 'Food', icon: '🍔' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Recent transactions</h3>
        <button className="text-blue-500 hover:text-blue-600">View all</button>
      </div>
      <div className="space-y-4">
        {transactions.map(transaction => (
          <TransactionItem key={transaction.id} {...transaction} />
        ))}
      </div>
    </div>
  );
}