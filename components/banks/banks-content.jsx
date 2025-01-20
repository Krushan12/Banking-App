import { Copy } from 'lucide-react';

export default function BanksContent() {
  const bankCards = [
    { id: 1, name: 'Celestial Banking', spending: 2840.40, cardNumber: '1234 1234 1234 1234', expiryDate: '06/24' },
    { id: 2, name: 'Bank of Australia', spending: 2840.40, cardNumber: '1234 1234 1234 1234', expiryDate: '06/24' },
    { id: 3, name: 'Bank of India', spending: 2840.40, cardNumber: '1234 1234 1234 1234', expiryDate: '06/24' },
    { id: 4, name: 'Bank of America', spending: 2840.40, cardNumber: '1234 1234 1234 1234', expiryDate: '06/24' },
    { id: 5, name: 'Bank of Canada', spending: 2840.40, cardNumber: '1234 1234 1234 1234', expiryDate: '06/24' },
    { id: 6, name: 'Bank of Baorda', spending: 2840.40, cardNumber: '1234 1234 1234 1234', expiryDate: '06/24' },
  ];

  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold text-white mb-2">My Bank Accounts</h1>
        <p className="text-gray-400">Effortlessly Manage Your Banking Activities</p>
      </header>

      <section>
        <h2 className="text-xl font-medium text-white mb-6">Your cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bankCards.map((card) => (
            <BankCard key={card.id} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
}

function BankCard({ name, spending, cardNumber, expiryDate }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-lg font-medium text-white">{name}</h3>
        <button className="p-2 hover:bg-gray-700 rounded-lg">
          <Copy size={16} className="text-gray-400" />
        </button>
      </div>

      {/* Card Display */}
      <div className="mb-6 bg-gradient-to-r from-blue-600 to-blue-400 p-4 rounded-xl">
        <div className="flex flex-col h-40 justify-between">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <p className="text-xs text-white/80">Card Number</p>
              <p className="text-sm text-white font-medium">{cardNumber}</p>
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-white/30"></div>
              <div className="w-8 h-8 rounded-full bg-white/20"></div>
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs text-white/80 mb-1">Card Holder</p>
              <p className="text-sm text-white font-medium">ADRIAN HAJDIN</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-white/80 mb-1">Expires</p>
              <p className="text-sm text-white font-medium">{expiryDate}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Spending Information */}
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-400 mb-1">Spending this month</p>
          <div className="flex items-center justify-between">
            <p className="text-lg font-medium text-white">${spending.toFixed(2)}</p>
            <div className="w-24 h-2 rounded-full bg-gray-700 overflow-hidden">
              <div 
                className="h-full bg-blue-500 rounded-full"
                style={{ width: '75%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}