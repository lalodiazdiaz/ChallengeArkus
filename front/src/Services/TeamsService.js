import axios from "axios";

const API = `${process.env.REACT_APP_API_URL}/teams/createTeam`;

const local = localStorage.getItem("Token");
let authStr = "";

if (local) {
  authStr = `Bearer ${local}`;
}

export const createTeam = async (data) => {
  console.log(data);
  const resTeam = await axios.post(API, data, {
    headers: { Authorization: authStr },
  });
  return resTeam.data;
};
