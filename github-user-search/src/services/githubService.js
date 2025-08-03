import axios from 'axios';

const BASE_URL = import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com';

export const advancedSearchUsers = async ({ username, location, minRepos }, page = 1) => {
  let query = '';

  if (username) query += `user:${username}`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>${minRepos}`;

  const url = `${BASE_URL}/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=10`;

  const response = await axios.get(url);
  return response.data;
};
