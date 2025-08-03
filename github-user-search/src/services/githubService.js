import axios from 'axios';

export const advancedSearchUsers = async ({ username, location, minRepos }, page = 1) => {
  let query = '';

  if (username) query += `user:${username}`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>${minRepos}`;

  // Full hardcoded URL to match submission requirement
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=10`;

  const response = await axios.get(url);
  return response.data;
};
