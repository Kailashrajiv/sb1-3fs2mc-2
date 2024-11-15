import express from 'express';
import cors from 'cors';
import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const MCX_SPREADSHEET_ID = '1RZTSOyemZ6ewWWspZVqspeWUXz7I006OqBxyhCR4dOI';
const MCX_RANGE = 'A1';

let lastMCXPrice = 0;

async function fetchMCXPriceFromSheet() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS || ''),
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: MCX_SPREADSHEET_ID,
      range: MCX_RANGE,
    });

    const value = response.data.values?.[0]?.[0];
    const currentPrice = parseFloat(value);
    
    if (!isNaN(currentPrice)) {
      const previousPrice = lastMCXPrice;
      lastMCXPrice = currentPrice;
      
      return {
        price: currentPrice,
        previousPrice,
        lastUpdated: new Date().toISOString(),
      };
    }
    
    throw new Error('Invalid price data');
  } catch (error) {
    console.error('Error fetching MCX price:', error);
    throw error;
  }
}

// Endpoint to get MCX price
app.get('/api/mcx-price', async (req, res) => {
  try {
    const data = await fetchMCXPriceFromSheet();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch MCX price' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});