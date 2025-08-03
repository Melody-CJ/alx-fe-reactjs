import React, { useState } from 'react';
import { fetchUserData, advancedSearchUsers } from '../services/githubService';

const Search = () => {
  const [formData, setFormData] = useState({
    username: '',
    location: '',
    minRepos: '',
  });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, nextPage = 1) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      if (formData.username && !formData.location && !formData.minRepos) {
        // Use fetchUserData only when it's a basic username-only search
        const data = await fetchUserData(formData.username);
        setResults([data]);
      } else {
        // Use advanced search if other fields are filled
        const data = await advancedSearchUsers(formData, nextPage);
        setResults((prev) => (nextPage === 1 ? data.items : [...prev, ...data.items]));
        setPage(nextPage);
      }
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Advanced GitHub User Search</h1>
      <form onSubmit={(e) => handleSubmit(e, 1)} className="grid gap-4 sm:grid-cols-3 mb-6">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="p-2 border rounded"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="p-2 border rounded"
          value={formData.location}
          onChange={handleChange}
        />
        <input
          type="number"
          name="minRepos"
          placeholder="Min Repositories"
          className="p-2 border rounded"
          value={formData.minRepos}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="sm:col-span-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid gap-4">
        {results.map((user) => (
          <div
            key={user.id || user.login}
            className="p-4 border rounded shadow flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <div>
                <h3 className="font-bold">{user.login}</h3>
                <a
                  href={user.html_url}
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {results.length > 0 && formData.location && (
        <button
          onClick={(e) => handleSubmit(e, page + 1)}
          className="mt-6 block mx-auto bg-gray-800 text-white px-4 py-2 rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
