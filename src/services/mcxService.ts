// Using a proxy server endpoint instead of direct Google Sheets API
const API_URL = 'http://localhost:3000/api/mcx-price';

export interface MCXPrice {
  price: number;
  previousPrice: number;
  lastUpdated: string;
}

export async function fetchMCXPrice(): Promise<MCXPrice> {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch MCX price');
    }
    
    const data = await response.json();
    return {
      price: data.price,
      previousPrice: data.previousPrice || 0,
      lastUpdated: data.lastUpdated || new Date().toISOString(),
    };
  } catch (error) {
    console.error('Error fetching MCX price:', error);
    throw error;
  }
}