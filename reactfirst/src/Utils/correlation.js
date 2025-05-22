export function calculateCorrelationMatrix(priceMap, tickers) {
  const n = tickers.length;
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = pearson(priceMap[tickers[i]], priceMap[tickers[j]]);
    }
  }

  return matrix;
}

function pearson(x, y) {
  const n = x.length;
  const avgX = x.reduce((a, b) => a + b, 0) / n;
  const avgY = y.reduce((a, b) => a + b, 0) / n;

  const cov = x.map((xi, i) => (xi - avgX) * (y[i] - avgY)).reduce((a, b) => a + b, 0);
  const stdX = Math.sqrt(x.map(xi => (xi - avgX) ** 2).reduce((a, b) => a + b, 0));
  const stdY = Math.sqrt(y.map(yi => (yi - avgY) ** 2).reduce((a, b) => a + b, 0));

  return cov / (stdX * stdY);
}
