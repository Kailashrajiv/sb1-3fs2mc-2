import React from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { useLMEHistory } from '../hooks/useLMEHistory';

export default function LMECashSettlement() {
  const { data, loading } = useLMEHistory();

  if (loading) {
    return (
      <div className="grid grid-cols-4 gap-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm animate-pulse">
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-20 mb-2"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-24 mb-2"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
          </div>
        ))}
      </div>
    );
  }

  // Calculate changes between consecutive days
  const dataWithChanges = data.map((item, index) => {
    const previousDayPrice = data[index + 1]?.price;
    const change = previousDayPrice ? item.price - previousDayPrice : 0;
    return {
      ...item,
      change
    };
  });

  return (
    <div className="grid grid-cols-4 gap-2">
      {dataWithChanges.map((item) => (
        <div 
          key={item.date}
          className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm"
        >
          <div className="text-gray-600 dark:text-gray-400 text-xs mb-1">{item.date}</div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-gray-900 dark:text-white mb-1">
              ${item.price.toFixed(2)}
            </span>
            {item.change !== 0 && (
              <span className={`flex items-center text-xs ${
                item.change > 0 ? 'text-green-500' : 'text-red-500'
              }`}>
                {item.change > 0 ? (
                  <TrendingUp className="w-3 h-3 mr-0.5" />
                ) : (
                  <TrendingDown className="w-3 h-3 mr-0.5" />
                )}
                ${Math.abs(item.change).toFixed(2)}
              </span>
            )}
          </div>
          <div className="text-gray-500 dark:text-gray-400 mt-2 text-xs text-center">
            LME Cash Settlement
          </div>
        </div>
      ))}
    </div>
  );
}