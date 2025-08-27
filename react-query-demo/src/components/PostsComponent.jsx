import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const PostsComponent = () => {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5000, // Data stays fresh for 5 seconds
    cacheTime: 1000 * 60 * 5, // Cache persists for 5 minutes
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Posts (React Query Demo)</h2>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? 'Refreshing...' : 'Refetch Posts'}
      </button>
      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
