import React from 'react';
import './CorrelationHeatmap.css';

const CorrelationHeatmap = ({ data }) => {
  const { labels, matrix } = data;

  const getColor = (value) => {
    
    if (value > 0.5) return `rgba(0, 128, 0, ${value})`; 
    if (value > 0.2) return `rgba(0, 255, 0, ${value * 0.8})`; 
    if (value < -0.5) return `rgba(255, 0, 0, ${Math.abs(value)})`; 
    if (value < -0.2) return `rgba(255, 100, 100, ${Math.abs(value) * 0.8})`; 
    return `rgba(200, 200, 200, ${1 - Math.abs(value) * 0.5})`;
  };

  return (
    <div className="heatmap-container">
      <h2>Stock Correlation Heatmap</h2>
      <div className="heatmap-grid">
        <div className="heatmap-header-row">
          <div className="heatmap-cell header-label corner"></div> {}
          {labels.map((label) => (
            <div key={label} className="heatmap-cell header-label">
              {label}
            </div>
          ))}
        </div>
        {matrix.map((row, rowIndex) => (
          <div key={rowIndex} className="heatmap-row">
            <div className="heatmap-cell header-label y-label">{labels[rowIndex]}</div>
            {row.map((value, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="heatmap-cell"
                style={{ backgroundColor: getColor(value) }}
                title={`Correlation between ${labels[rowIndex]} and ${labels[colIndex]}: ${value.toFixed(2)}`}
              >
                {value.toFixed(2)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CorrelationHeatmap;