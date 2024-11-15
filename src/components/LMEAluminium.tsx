import React from 'react';

export default function LMEAluminium() {
  const inrPrice = (2514 * 1.0825 * 84.4063 + 3000) / 1000;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">LME Aluminium</h2>
        <div className="flex gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200">$</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-700 dark:text-gray-200">₹</button>
        </div>
      </div>

      <div>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-4xl font-bold text-blue-500">$2514.00</span>
          <span className="text-gray-500 dark:text-gray-400">per MT</span>
        </div>
        <div className="text-red-500 text-lg mb-4">-16.00 (-0.63%)</div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-3xl font-bold text-green-500">₹{inrPrice.toFixed(2)}</span>
            <span className="text-gray-500 dark:text-gray-400">per kg</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Includes logistics premium (8.25%) & duty factor (₹3/kg)
          </p>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400">Last updated: Live</div>
      </div>
    </div>
  );
}