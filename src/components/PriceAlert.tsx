import React, { useState } from 'react';
import { Bell, Mail, MessageCircle } from 'lucide-react';

type AlertCategory = 'MCX' | 'LME' | 'NALCO';
type AlertType = 'PRICE' | 'PERCENTAGE' | 'PRICE_CHANGE';

export default function PriceAlert() {
  const [selectedCategory, setSelectedCategory] = useState<AlertCategory>('MCX');
  const [alertType, setAlertType] = useState<AlertType>('PRICE');
  const [notifications, setNotifications] = useState({
    webApp: true,
    whatsapp: false,
    email: false
  });

  const showPricePercentageOptions = selectedCategory !== 'NALCO';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <Bell className="w-6 h-6 text-blue-500" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Price Alert</h2>
      </div>

      <div className="space-y-6">
        {/* Category Selection - New Design */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Category
          </label>
          <div className="flex items-center h-10 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            {(['MCX', 'LME', 'NALCO'] as AlertCategory[]).map((category, index) => (
              <React.Fragment key={category}>
                <button
                  onClick={() => {
                    setSelectedCategory(category);
                    if (category === 'NALCO') {
                      setAlertType('PRICE_CHANGE');
                    }
                  }}
                  className={`flex-1 h-8 rounded-md text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {category}
                </button>
                {index < 2 && (
                  <div className="h-4 w-px bg-gray-300 dark:bg-gray-600 mx-1" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Alert Type Selection - Only for MCX and LME */}
        {showPricePercentageOptions && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Alert Type
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setAlertType('PRICE')}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  alertType === 'PRICE'
                    ? 'bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Price
              </button>
              <button
                onClick={() => setAlertType('PERCENTAGE')}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  alertType === 'PERCENTAGE'
                    ? 'bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Percentage
              </button>
            </div>
          </div>
        )}

        {/* Target Value Input - Only for MCX and LME */}
        {showPricePercentageOptions && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Target {alertType === 'PRICE' ? 'Price' : 'Percentage'}
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                {alertType === 'PRICE' ? (selectedCategory === 'MCX' ? '₹' : '$') : '%'}
              </span>
              <input
                type="number"
                className="w-full pl-8 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={`Enter target ${alertType === 'PRICE' ? 'price' : 'percentage'}`}
              />
            </div>
          </div>
        )}

        {/* Notification Methods */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Notification Method
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => setNotifications(prev => ({ ...prev, webApp: !prev.webApp }))}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-1 ${
                notifications.webApp
                  ? 'bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <Bell className="w-4 h-4" />
              Web App
            </button>
            <button
              onClick={() => setNotifications(prev => ({ ...prev, whatsapp: !prev.whatsapp }))}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-1 ${
                notifications.whatsapp
                  ? 'bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
            <button
              onClick={() => setNotifications(prev => ({ ...prev, email: !prev.email }))}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-1 ${
                notifications.email
                  ? 'bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <Mail className="w-4 h-4" />
              Email
            </button>
          </div>
        </div>

        {/* Custom Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Custom Message (Optional)
          </label>
          <textarea
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows={3}
            placeholder={selectedCategory === 'NALCO' 
              ? "You'll be notified when NALCO price changes"
              : "Add a custom message for your alert"
            }
          />
          {selectedCategory !== 'NALCO' && (
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Available variables: {'{price}'}, {'{change}'}, {'{percentage}'}
            </p>
          )}
        </div>

        {/* Set Alert Button */}
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors">
          <Bell className="w-4 h-4" />
          Set Alert
        </button>
      </div>
    </div>
  );
}