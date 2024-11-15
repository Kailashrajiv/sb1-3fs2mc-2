import React from 'react';

export default function RBIReference() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">RBI Reference Rate</h2>
      
      <div className="flex items-center gap-2 mb-2">
        <span className="text-green-500 text-2xl">$</span>
        <span className="text-2xl text-gray-900 dark:text-white">1</span>
        <span className="text-2xl text-gray-900 dark:text-white">=</span>
        <span className="text-blue-500 text-2xl">₹</span>
        <span className="text-4xl font-bold text-gray-900 dark:text-white">84.4063</span>
      </div>

      <div className="text-sm text-gray-500 dark:text-gray-400">15 Nov 2024</div>
    </div>
  );
}