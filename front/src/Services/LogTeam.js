import axios from "axios";

const API = `${process.env.REACT_APP_API_URL}/log`;

const token = localStorage.getItem("Token");
let authStr = "";

if (token) {
  authStr = `Bearer ${token}`;
}

export const createMove = async (data) => {
  const resLogin = await axios.post(`${API}/createLog`, data, {
    headers: { Authorization: authStr },
  });
  return resLogin.data;
};

export const getMoves = async () => {
  const moves = await axios.get(`${API}/getMoves`, {
    headers: { Authorization: authStr },
  });
  return moves.data;
};
