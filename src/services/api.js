import axios from "axios";
import ENDPOINTS from "../Constants/Endpoints";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(
      error.response ? error.response.data : new Error("Something went wrong")
    );
  }
);

export const addUser = async (userData) => {
  try {
    const response = await api.post(ENDPOINTS.addUser, userData);
    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error("Something went wrong");
  }
};

export const getUsers = async () => {
  try {
    const response = await api.get(ENDPOINTS.users);
    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error("Something went wrong");
  }
};
