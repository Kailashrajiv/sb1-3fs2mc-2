import React from 'react';
import { TrendingDown, TrendingUp, Loader2 } from 'lucide-react';
import { useLMEHistory } from '../hooks/useLMEHistory';

export default function LMEHistory() {
  const { data, loading, error } = useLMEHistory();

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <Loader2 className="w-6 h-6 animate-spin text-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-4">
        {error}
      </div>
    );
  }

  return (
    <>
      {data.map((item) => (
        <div 
          key={item.date} 
          className="flex-none w-[250px] bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4"
        >
          <div className="text-gray-600 dark:text-gray-400 text-sm mb-1">{item.date}</div>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${item.price.toFixed(2)}
            </span>
            {item.change !== 0 && (
              <span className={`flex items-center text-sm ${item.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {item.change > 0 ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                ${Math.abs(item.change).toFixed(2)}
              </span>
            )}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">LME Cash Settlement</div>
        </div>
      ))}
    </>
  );
}