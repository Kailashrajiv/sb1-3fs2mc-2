import { useState, useEffect } from 'react';

interface MCXPriceData {
  price: number;
  changePercent: number;
  lastUpdated: string;
}

export function useMCXPrice() {
  const [data, setData] = useState<MCXPriceData>({
    price: 235.20,
    changePercent: 0,
    lastUpdated: new Date().toISOString()
  });

  useEffect(() => {
    const updatePrice = () => {
      // Simulate real-time updates
      setData(prev => ({
        price: 235.20,
        changePercent: 0,
        lastUpdated: new Date().toISOString()
      }));
    };

    // Update every 15 seconds
    const intervalId = setInterval(updatePrice, 15000);
    updatePrice(); // Initial update

    return () => clearInterval(intervalId);
  }, []);

  return data;
}