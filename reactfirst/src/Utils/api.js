
import axios from "axios";

const BASE_URL = "/evaluation-service";

const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
});

export const getStocks = async () => {
  const res = await axiosInstance.get("/stocks");
  return res.data.stocks;
};

export const getStockPrices = async (ticker, minutes = 30) => {
  const res = await axiosInstance.get(`/stocks/${ticker}?minutes=${minutes}`);
  return res.data;
};
