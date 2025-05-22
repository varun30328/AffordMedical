import React, { useState, useEffect } from 'react';
import StockChart from './/Components/StockChart';
// import CorrelationHeatmap from './Components/CorrelationHeatmap';
import { stocksData, historicalData, correlationData } from './data';
import './App.css';

function App() {
  const [selectedStock, setSelectedStock] = useState(stocksData.length > 0 ? stocksData[0].symbol : null);
  const [stockDetail, setStockDetail] = useState(null);

  useEffect(() => {
    if (selectedStock) {
      const stockInfo = stocksData.find(s => s.symbol === selectedStock);
      const history = historicalData[selectedStock];
      if (stockInfo && history) {
        setStockDetail({ ...stockInfo, historical: history });
      } else {
        setStockDetail(null);
      }
    } else {
      setStockDetail(null);
    }
  }, [selectedStock]);

  const handleStockChange = (event) => {
    setSelectedStock(event.target.value);
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Stock Market Dashboard</h1>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-left-panel">
          {}
          <div className="card stock-selector-card">
            <h2>Select a Stock</h2>
            <select
              className="stock-select-dropdown"
              value={selectedStock || ''} 
              onChange={handleStockChange}
            >
              {stocksData.map((stock) => (
                <option key={stock.symbol} value={stock.symbol}>
                  {stock.companyName} ({stock.symbol})
                </option>
              ))}
            </select>
          </div>

         
        </div>

        <div className="dashboard-right-panel">
          {stockDetail ? (
            <div className="card stock-detail-card">
              <div className="stock-detail-header">
                <h2>{stockDetail.companyName} ({stockDetail.symbol})</h2>
                <div className="current-price-info">
                  <span className="price">${stockDetail.currentPrice.toFixed(2)}</span>
                  <span className={`change ${stockDetail.change >= 0 ? 'positive' : 'negative'}`}>
                    {stockDetail.change >= 0 ? '+' : ''}{stockDetail.change.toFixed(2)} (
                    {stockDetail.changePercent.toFixed(2)}%)
                  </span>
                </div>
              </div>
              <div className="stock-meta-info">
                <span>Sector: <strong>{stockDetail.sector}</strong></span>
                <span>Market Cap: <strong>{stockDetail.marketCap}</strong></span>
              </div>
              <StockChart
                symbol={stockDetail.symbol}
                companyName={stockDetail.companyName}
                data={stockDetail.historical}
              />
            </div>
          ) : (
            <div className="card stock-detail-card">
              <p>Please select a stock from the dropdown.</p>
            </div>
          )}

          {/* <CorrelationHeatmap data={correlationData} /> */}
        </div>
      </main>

      <footer className="dashboard-footer">
        <p>&copy; 2025 Stock Dashboard. All rights reserved. Data is simulated.</p>
      </footer>
    </div>
  );
}

export default App;