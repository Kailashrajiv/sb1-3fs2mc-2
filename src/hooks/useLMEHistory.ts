import { useState, useEffect } from 'react';
import { mockLMEHistory } from '../services/mockData';

interface LMEHistoryData {
  date: string;
  price: number;
}

export function useLMEHistory() {
  const [data, setData] = useState<LMEHistoryData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setData(mockLMEHistory);
      setLoading(false);
    }, 1000);
  }, []);

  return { data, loading, error };
}