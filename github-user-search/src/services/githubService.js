import axios from 'axios';

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

export const advancedSearchUsers = async ({ username, location, minRepos }, page = 1) => {
  let query = '';

  if (username) query += `user:${username}`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=10`;
  const response = await axios.get(url);
  return response.data;
};
