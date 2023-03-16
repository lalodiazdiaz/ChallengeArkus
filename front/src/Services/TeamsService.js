import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const local = localStorage.getItem("Token");
let authStr = "";

if (local) {
  authStr = `Bearer ${local}`;
}

export const createTeam = async (data) => {
  const resTeam = await axios.post(`${API}/teams/createTeam`, data, {
    headers: { Authorization: authStr },
  });
  return resTeam.data;
};

export const getAllTeams = async () => {
  const team = await axios.get(`${API}/teams/getTeams`, {
    headers: { Authorization: authStr },
  });
  return team.data;
};
