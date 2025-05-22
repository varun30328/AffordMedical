import React from 'react';
import './StockList.css'; 

const StockList = ({ stocks, onSelectStock, selectedStock }) => {
  return (
    <div className="stock-list-container">
      <h2>Top Stocks</h2>
      <div className="stock-list-header">
        <span className="stock-list-col">Symbol</span>
        <span className="stock-list-col">Company</span>
        <span className="stock-list-col align-right">Price</span>
        <span className="stock-list-col align-right">Change (%)</span>
      </div>
      <ul className="stock-list">
        {stocks.map((stock) => (
          <li
            key={stock.symbol}
            className={`stock-item ${selectedStock === stock.symbol ? 'selected' : ''}`}
            onClick={() => onSelectStock(stock.symbol)}
          >
            <span className="stock-list-col">{stock.symbol}</span>
            <span className="stock-list-col">{stock.companyName}</span>
            <span className="stock-list-col align-right">₹{stock.currentPrice.toFixed(2)}</span>
            <span
              className={`stock-list-col align-right ${stock.change >= 0 ? 'positive' : 'negative'}`}
            >
              {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;