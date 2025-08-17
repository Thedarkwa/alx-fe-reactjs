import axios from "axios";

export const fetchUserData = async (username, location = "", minRepos = 0, page = 1) => {
  let query = `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos > 0) query += `+repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${query}&page=${page}&per_page=20`;

  const headers = {};
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  if (token) headers.Authorization = `token ${token}`;

  const { data } = await axios.get(url, { headers });
  return data.items;
};
