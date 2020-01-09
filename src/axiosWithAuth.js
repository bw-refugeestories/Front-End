import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    // Need to use the api url here (waiting on backend)
    baseURL: "https://refugees-lambda.herokuapp.com/", 
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;