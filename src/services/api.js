import axios from "axios";

// Create a reusable axios instance
const api = axios.create({
  baseURL: "http://localhost:5000/api",  // backend base URL
});

// Example API calls
export const translateSignToText = (videoData) => {
  return api.post("/translate/sign-to-text", { videoData });
};

export const translateTextToSign = (text) => {
  return api.post("/translate/text-to-sign", { text });
};

export default api;
