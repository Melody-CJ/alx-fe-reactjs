import axios from 'axios';

const BASE_URL = import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com';

export const fetchUserData = async (username) => {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
};