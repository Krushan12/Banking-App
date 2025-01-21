'use client';

import { useState } from 'react';
import { Home, CreditCard, History, Send, Link2 } from 'lucide-react';
import SearchBar from './search-bar';
import NavItem from './nav-bar';
import TransactionList from './transaction-list';

export default function DashboardContent() {
  const [balance] = useState(2698.12);
  
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-blue-600">Horizon</h1>
        </div>
        
        <div className="space-y-2">
          <SearchBar />
          <NavItem icon={<Home size={20} />} text="Home" active />
          <NavItem icon={<CreditCard size={20} />} text="My Banks" />
          <NavItem icon={<History size={20} />} text="Transaction History" />
          <NavItem icon={<Send size={20} />} text="Payment Transfer" />
          <NavItem icon={<Link2 size={20} />} text="Connect Bank" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-8">
        <header className="mb-8">
          <h2 className="text-2xl font-semibold">Welcome, Adrian</h2>
          <p className="text-gray-600">Access & manage your account and transactions efficiently.</p>
        </header>

        {/* Balance Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">2 Bank Accounts</h3>
            <button className="flex items-center text-blue-500 hover:text-blue-600">
              <span className="mr-1">+</span>
              Add bank
            </button>
          </div>
          <div className="flex items-center">
            <div className="w-32 h-32 relative">
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                <circle cx="50" cy="50" r="45" className="stroke-[8px] stroke-blue-100 fill-none" />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  className="stroke-[8px] stroke-blue-500 fill-none" 
                  style={{ strokeDasharray: '283', strokeDashoffset: '70' }}
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Current Balance</p>
              <p className="text-3xl font-semibold">${balance.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Transactions Section */}
        <TransactionList />
      </div>
    </div>
  );
}