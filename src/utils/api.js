// src/utils/api.js
import axios from "axios";
import BASEURL from "./constant"; // your backend base url

// ✅ Safe token parsing
let rawToken = null;
try {
  rawToken = window.localStorage.getItem("userToken");
  // storedToken = rawToken ? JSON.parse(rawToken) : null;
} catch (err) {
  console.warn("Invalid token in localStorage:", err);
  rawToken = null;
}

console.log("storedToken:", rawToken);

// ✅ Axios instance
const apiClient = axios.create({
  baseURL: BASEURL,
  headers: {
    Authorization: rawToken ? `Bearer ${rawToken}` : "",
    "Content-Type": "application/json",
  },
});

// ✅ Generic GET
export const getRequest = async (url, params = {}) => {
  try {
    const response = await apiClient.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("GET request failed:", error);
    throw error;
  }
};

// ✅ Generic POST
export const postRequest = async (url, data = {}) => {
  try {
    const response = await apiClient.post(url, data);
    return response.data;
  } catch (error) {
    console.error("POST request failed:", error);
    throw error;
  }
};

// ✅ Generic PUT
export const putRequest = async (url, data = {}) => {
  try {
    const response = await apiClient.put(url, data);
    return response.data;
  } catch (error) {
    console.error("PUT request failed:", error);
    throw error;
  }
};

// ✅ Generic DELETE
export const deleteRequest = async (url) => {
  try {
    const response = await apiClient.delete(url);
    return response.data;
  } catch (error) {
    console.error("DELETE request failed:", error);
    throw error;
  }
};

// ✅ Fetch wallet transactions
export const fetchWalletTransactions = async ({ address, chain, page = 1, perPage = 10 }) => {
  return await getRequest("/wallet/transactions", {
    address,
    chain,
    "page[page]": page,
    "page[perPage]": perPage,
  });
};

// ✅ Fetch addresses
export const fetchAddresses = async (page = 1, perPage = 10) => {
  return await getRequest("wallet", {
    "page": page,
    "perPage": perPage,
  });
};

// ✅ Create wallet
export const createWallet = async (payload) => {
  try {
    const response = await axios.post(`${BASEURL}/wallet/create`, payload);
    return response.data;
  } catch (error) {
    console.error("Error creating wallet:", error);
    throw error.response?.data || error.message;
  }
};

// ✅ Top holders
export const getTopHolders = async (page = 1, perPage = 10) => {
  return await getRequest("wallet/tokens/unsold-holders", {
    "page": page,
    "perPage": perPage,
  });
};

// ✅ Recent trades
export const getRecentTrades = async (page = 1, perPage = 10) => {
  return await getRequest("wallet/recent-trades", {
    "page": page,
    "perPage": perPage,
  });
};
