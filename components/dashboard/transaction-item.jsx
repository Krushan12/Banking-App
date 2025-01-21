export default function TransactionItem({ name, amount, status, date, category, icon }) {
    return (
      <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            {icon}
          </div>
          <div className="ml-3">
            <p className="font-medium">{name}</p>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        <div className="text-right">
          <p className={`font-medium ${amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {amount > 0 ? '+' : ''}{amount.toFixed(2)}
          </p>
          <span className={`text-xs px-2 py-1 rounded-full ${
            status === 'Success' ? 'bg-green-100 text-green-600' :
            status === 'Declined' ? 'bg-red-100 text-red-600' :
            'bg-gray-100 text-gray-600'
          }`}>
            {status}
          </span>
        </div>
      </div>
    );
  }