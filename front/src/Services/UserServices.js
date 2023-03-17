import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const local = localStorage.getItem("Token");
let authStr = "";

if (local) {
  authStr = `Bearer ${local}`;
}

export const createUser = async (data) => {
  const createNew = await axios.post(`${API}/users/createUser`, data, {
    headers: { Authorization: authStr },
  });
  return createNew.data;
};

export const getAllUser = async () => {
  const User = await axios.get(`${API}/users/getUsers`, {
    headers: { Authorization: authStr },
  });
  return User.data;
};

export const getOneUser = async (id) => {
  const user = await axios.get(`${API}/users/getOneUser?idUser=${id}`, {
    headers: { Authorization: authStr },
  });
  return user.data;
};

export const deleteUSer = async (id) => {
  const user = await axios.delete(`${API}/users/deleteUser?idUser=${id}`, {
    headers: { Authorization: authStr },
  });
  return user.data;
};
