'use client';

import React from 'react';
import { Home, User, Settings, LogOut, CreditCard, History, Wallet } from 'lucide-react';

const Sidebar = () => {
  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Transactions', href: '/transactions', icon: History },
    { name: 'Cards', href: '/cards', icon: CreditCard },
    { name: 'Wallet', href: '/wallet', icon: Wallet },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <aside className="sidebar">
      {/* Logo and Brand */}
      <div className="flex flex-col gap-8">
        <div className="flex items-center xl:items-start px-4">
          <h1 className="sidebar-logo">Celestial</h1>
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-col gap-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="sidebar-link hover:bg-gray-100 transition-colors"
            >
              <item.icon size={24} className="text-gray-600" />
              <span className="sidebar-label">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col gap-4">
        {/* Logout Button */}
        <button 
          className="sidebar-link hover:bg-red-50 hover:text-red-600 transition-colors mt-auto"
          onClick={() => console.log('Logout clicked')}
        >
          <LogOut size={24} className="text-gray-600" />
          <span className="sidebar-label">Logout</span>
        </button>

        {/* User Profile Footer */}
        <div className="footer">
          <div className="footer_name">
            <span className="text-14 text-gray-700">JD</span>
          </div>
          <div className="footer_email">
            <p className="text-14 font-medium text-gray-900">John Doe</p>
            <p className="text-12 text-gray-500">john@celestial.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;