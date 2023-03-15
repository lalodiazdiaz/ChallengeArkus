import axios from "axios";

const API = `${process.env.REACT_APP_API_URL}/users/createUser`;

const local = localStorage.getItem("Token");
let authStr = "";

if (local) {
  authStr = `Bearer ${local}`;
}

export const createUser = async (data) => {
  const resLogin = await axios.post(API, data, {
    headers: { Authorization: authStr },
  });
  return resLogin.data;
};
