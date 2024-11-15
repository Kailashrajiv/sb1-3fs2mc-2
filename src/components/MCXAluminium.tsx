import React from 'react';
import { useMCXPrice } from '../hooks/useMCXPrice';
import { Loader2 } from 'lucide-react';

export default function MCXAluminium() {
  const { price, changePercent, lastUpdated } = useMCXPrice();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">MCX Aluminium</h2>
        <span className="text-gray-500 dark:text-gray-400">Future Nov 2024</span>
      </div>
      
      <div className="mb-4">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-blue-500">
            ₹{price.toFixed(2)}
          </span>
          <span className="text-gray-500 dark:text-gray-400">per kg</span>
        </div>
        <div className={`text-lg ${changePercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {changePercent >= 0 ? '+' : ''}{changePercent.toFixed(2)}%
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <span>
          Last updated: {new Date(lastUpdated).toLocaleTimeString()}
        </span>
        <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-xs">
          Live
        </span>
      </div>
    </div>
  );
}