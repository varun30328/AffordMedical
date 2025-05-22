export const stocksData = [
  {
    symbol: "AMD",
    companyName: "Advanced Micro Devices, Inc.",
    currentPrice: 165.75,
    change: 3.20,
    changePercent: 1.97,
    sector: "Semiconductors",
    marketCap: "267.5 B",
  },
  {
    symbol: "GOOGL",
    companyName: "Alphabet Inc. Class A",
    currentPrice: 178.90,
    change: -1.50,
    changePercent: -0.83,
    sector: "Technology",
    marketCap: "2.2 T",
  },
  {
    symbol: "GOOG",
    companyName: "Alphabet Inc. Class C",
    currentPrice: 179.30,
    change: -1.20,
    changePercent: -0.67,
    sector: "Technology",
    marketCap: "2.2 T", 
  },
  {
    symbol: "AMZN",
    companyName: "Amazon.com, Inc.",
    currentPrice: 185.40,
    change: 2.10,
    changePercent: 1.15,
    sector: "E-commerce & Cloud",
    marketCap: "1.9 T",
  },
  {
    symbol: "AMGN",
    companyName: "Amgen Inc.",
    currentPrice: 300.50,
    change: 0.80,
    changePercent: 0.27,
    sector: "Biotechnology",
    marketCap: "160.0 B",
  },
  {
    symbol: "AAPL",
    companyName: "Apple Inc.",
    currentPrice: 195.10,
    change: 1.70,
    changePercent: 0.88,
    sector: "Technology",
    marketCap: "3.0 T",
  },
  {
    symbol: "BRK.B",
    companyName: "Berkshire Hathaway Inc.",
    currentPrice: 420.25,
    change: 0.90,
    changePercent: 0.21,
    sector: "Conglomerate",
    marketCap: "910.0 B",
  },
  {
    symbol: "BKNG",
    companyName: "Booking Holdings Inc.",
    currentPrice: 3800.00,
    change: -15.50,
    changePercent: -0.41,
    sector: "Travel Technology",
    marketCap: "135.0 B",
  },
  {
    symbol: "AVGO",
    companyName: "Broadcom Inc.",
    currentPrice: 1390.80,
    change: 8.90,
    changePercent: 0.64,
    sector: "Semiconductors & Software",
    marketCap: "650.0 B",
  },
  {
    symbol: "CSX",
    companyName: "CSX Corporation",
    currentPrice: 33.10,
    change: 0.25,
    changePercent: 0.76,
    sector: "Railroad",
    marketCap: "65.0 B",
  },
  {
    symbol: "LLY",
    companyName: "Eli Lilly and Company",
    currentPrice: 830.60,
    change: 5.70,
    changePercent: 0.69,
    sector: "Pharmaceuticals",
    marketCap: "790.0 B",
  },
  {
    symbol: "MAR",
    companyName: "Marriott International, Inc.",
    currentPrice: 240.70,
    change: -0.90,
    changePercent: -0.37,
    sector: "Hotels & Lodging",
    marketCap: "72.0 B",
  },
  {
    symbol: "MRVL",
    companyName: "Marvell Technology, Inc.",
    currentPrice: 75.20,
    change: 1.10,
    changePercent: 1.48,
    sector: "Semiconductors",
    marketCap: "65.0 B",
  },
  {
    symbol: "META",
    companyName: "Meta Platforms, Inc.",
    currentPrice: 480.20,
    change: 3.50,
    changePercent: 0.73,
    sector: "Social Media & Tech",
    marketCap: "1.2 T",
  },
  {
    symbol: "MSFT",
    companyName: "Microsoft Corporation",
    currentPrice: 425.90,
    change: 2.10,
    changePercent: 0.50,
    sector: "Software & Cloud",
    marketCap: "3.2 T",
  },
  {
    symbol: "NVDA",
    companyName: "Nvidia Corporation",
    currentPrice: 950.00,
    change: 12.00,
    changePercent: 1.28,
    sector: "Semiconductors",
    marketCap: "2.4 T",
  },
  {
    symbol: "PYPL",
    companyName: "PayPal Holdings, Inc.",
    currentPrice: 65.50,
    change: -0.40,
    changePercent: -0.61,
    sector: "Fintech",
    marketCap: "70.0 B",
  },
  {
    symbol: "2330.TW", // Assuming this is the symbol for TSMC
    companyName: "Taiwan Semiconductor Manufacturing Company",
    currentPrice: 850.00, // Price in NTD, for simplicity
    change: 5.00,
    changePercent: 0.59,
    sector: "Semiconductors",
    marketCap: "700.0 B", // Approximate USD equivalent
  },
  {
    symbol: "TSLA",
    companyName: "Tesla, Inc.",
    currentPrice: 175.80,
    change: -2.30,
    changePercent: -1.29,
    sector: "Automotive & Energy",
    marketCap: "560.0 B",
  },
  {
    symbol: "V",
    companyName: "Visa Inc.",
    currentPrice: 270.30,
    change: 1.10,
    changePercent: 0.41,
    sector: "Payments Technology",
    marketCap: "550.0 B",
  },
];

// Helper to generate a plausible historical data array
const generateHistoricalData = (basePrice, days = 7) => {
  const data = [];
  const labels = [];
  let price = basePrice;
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    labels.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    // Simulate slight fluctuations
    price = price * (1 + (Math.random() - 0.5) * 0.015); // +/- 0.75% daily change
    data.push(parseFloat(price.toFixed(2)));
  }
  // Ensure the last price matches the current price from stocksData
  data[data.length - 1] = basePrice;
  return { labels, data };
};

export const historicalData = {
  AMD: generateHistoricalData(165.75),
  GOOGL: generateHistoricalData(178.90),
  GOOG: generateHistoricalData(179.30),
  AMZN: generateHistoricalData(185.40),
  AMGN: generateHistoricalData(300.50),
  AAPL: generateHistoricalData(195.10),
  "BRK.B": generateHistoricalData(420.25),
  BKNG: generateHistoricalData(3800.00),
  AVGO: generateHistoricalData(1390.80),
  CSX: generateHistoricalData(33.10),
  LLY: generateHistoricalData(830.60),
  MAR: generateHistoricalData(240.70),
  MRVL: generateHistoricalData(75.20),
  META: generateHistoricalData(480.20),
  MSFT: generateHistoricalData(425.90),
  NVDA: generateHistoricalData(950.00),
  PYPL: generateHistoricalData(65.50),
  "2330.TW": generateHistoricalData(850.00),
  TSLA: generateHistoricalData(175.80),
  V: generateHistoricalData(270.30),
};
const newLabels = stocksData.map(stock => stock.symbol);
const generateCorrelationMatrix = (labels) => {
  const matrix = [];
  for (let i = 0; i < labels.length; i++) {
    const row = [];
    for (let j = 0; j < labels.length; j++) {
      if (i === j) {
        row.push(1.0); 
      } else {
        let value = (Math.random() * 1.4) - 0.5;
        if (labels[i].includes('GOOG') && labels[j].includes('GOOG')) {
            value = 0.99;
        } else if (['AMD', 'NVDA', 'MRVL', 'AVGO'].includes(labels[i]) && ['AMD', 'NVDA', 'MRVL', 'AVGO'].includes(labels[j])) {
            value = (Math.random() * 0.4) + 0.5;
        } else if (['MSFT', 'AAPL', 'AMZN', 'META'].includes(labels[i]) && ['MSFT', 'AAPL', 'AMZN', 'META'].includes(labels[j])) {
            value = (Math.random() * 0.4) + 0.4; 
        }
        row.push(parseFloat(value.toFixed(2)));
      }
    }
    matrix.push(row);
  }
  return matrix;
};

export const correlationData = {
  labels: newLabels,
  matrix: generateCorrelationMatrix(newLabels),
};