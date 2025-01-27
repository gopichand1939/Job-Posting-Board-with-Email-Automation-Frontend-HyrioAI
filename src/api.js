import axios from "axios";

// Create Axios instance
const API = axios.create({
  baseURL: "https://job-posting-board-with-email-automation.onrender.com/api",
  withCredentials: true, // Ensure cookies are included if needed
});

// Axios interceptor to add the Authorization header
API.interceptors.request.use((req) => {
  // Retrieve token from local storage
  const token = localStorage.getItem("token"); // Make sure the token is stored under this key
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const registerUser = (data) => API.post("/auth/register", data);
export const verifyEmail = (token) => API.get(`/auth/verify/${token}`);
export const loginUser = (data) => API.post("/auth/login", data);
export const logoutUser = () => API.post("/auth/logout");
export const createJob = (data) => API.post("/jobs", data);
export const getJobs = () => API.get("/jobs");
export const notifyCandidates = (jobId) => API.post(`/jobs/${jobId}/notify`);
