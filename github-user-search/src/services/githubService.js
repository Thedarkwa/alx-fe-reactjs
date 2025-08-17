import axios from "axios";

// Base URL for GitHub API
const BASE_URL = "https://api.github.com/search/user?q";

// 🔍 Function to search users with advanced criteria
export const fetchUserData = async (username, location = "", minRepos = 0) => {
  try {
    // Build the query string
    let query = `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos > 0) query += `+repos:>=${minRepos}`;

    // Call the Search API
    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);

    // Return the list of users
    return response.data.items;
  } catch (error) {
    throw error;
  }
};
