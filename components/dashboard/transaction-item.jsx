export default function TransactionItem({ name, amount, status, date, category, icon }) {
    return (
      <div className="flex items-center justify-between p-3 hover:bg-gray-700/50 rounded-lg transition-colors">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
            {icon}
          </div>
          <div className="ml-3">
            <p className="font-medium text-white">{name}</p>
            <p className="text-sm text-gray-400">{date}</p>
          </div>
        </div>
        <div className="text-right">
          <p className={`font-medium ${amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
            {amount > 0 ? '+' : ''}{amount.toFixed(2)}
          </p>
          <span className={`text-xs px-2 py-1 rounded-full ${
            status === 'Success' ? 'bg-green-900/50 text-green-400' :
            status === 'Declined' ? 'bg-red-900/50 text-red-400' :
            'bg-gray-700 text-gray-300'
          }`}>
            {status}
          </span>
        </div>
      </div>
    );
  }