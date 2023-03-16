import axios from "axios";

const API = `${process.env.REACT_APP_API_URL}/accounts`;

const token = localStorage.getItem("Token");
let authStr = "";

if (token) {
  authStr = `Bearer ${token}`;
}

export const createAccount = async (data) => {
  const resLogin = await axios.post(`${API}/createAccount`, data, {
    headers: { Authorization: authStr },
  });
  return resLogin.data;
};

export const getAccounts = async () => {
  const accounts = await axios.get(`${API}/getAccounts`, {
    headers: { Authorization: authStr },
  });
  return accounts.data;
};
