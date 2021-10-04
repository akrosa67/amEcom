import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://amecomm.herokuapp.com/api/"
});
