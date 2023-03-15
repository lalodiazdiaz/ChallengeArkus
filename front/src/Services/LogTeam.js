import axios from "axios";

const API = `${process.env.REACT_APP_API_URL}/log/createLog`;

const token = localStorage.getItem("Token");
let authStr = "";

if (token) {
  authStr = `Bearer ${token}`;
}

export const createMove = async (data) => {
  const resLogin = await axios.post(API, data, {
    headers: { Authorization: authStr },
  });
  return resLogin.data;
};
