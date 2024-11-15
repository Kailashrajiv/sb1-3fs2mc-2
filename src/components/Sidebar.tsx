import React from 'react';
import { Home, Bell, TrendingUp, History, Settings, X } from 'lucide-react';

type NavItem = {
  name: string;
  icon: React.ReactNode;
  active?: boolean;
  count?: number;
};

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navItems: NavItem[] = [
    { 
      name: 'Home', 
      icon: <Home className="w-5 h-5" />, 
      active: true 
    },
    { 
      name: 'Alert History', 
      icon: <History className="w-5 h-5" />,
      count: 12
    },
    { 
      name: 'Trends', 
      icon: <TrendingUp className="w-5 h-5" /> 
    }
  ];

  return (
    <div className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } z-20`}>
      <div className="flex flex-col h-full">
        {/* Logo/Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="w-6 h-6 text-blue-500" />
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                Price Tracker
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 lg:hidden"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    item.active
                      ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.count !== undefined && (
                    <span className={`ml-auto px-2 py-0.5 text-xs rounded-full ${
                      item.active
                        ? 'bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-400'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                    }`}>
                      {item.count}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1 text-left">
              <div className="text-sm font-medium text-gray-900 dark:text-white">John Doe</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">john@example.com</div>
            </div>
            <Settings className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}