import axios from "axios";

// Standard axios instance
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// For demonstration: A helper to simulate network delay
export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
