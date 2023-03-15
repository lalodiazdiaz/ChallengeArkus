import axios from "axios";
const API = `${process.env.REACT_APP_API_URL}/login`;

const login = async (email, password) => {
  const resLogin = await axios.post(API, { email, password });
  return resLogin.data;
};

export default login;
