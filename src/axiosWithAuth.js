import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    // Need to use the api url here (waiting on backend)
    baseURL: "http://localhost:5000/api", 
    headers: {
      Authorization: token
    }
  });
};