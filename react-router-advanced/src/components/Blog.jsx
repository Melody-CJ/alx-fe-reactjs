// src/components/Blog.jsx
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    { id: 1, title: 'Getting Started with React Router', excerpt: 'Learn the basics of routing in React applications.' },
    { id: 2, title: 'Advanced Routing Techniques', excerpt: 'Explore nested routes and protected routes in depth.' },
    { id: 3, title: 'Dynamic Routing Patterns', excerpt: 'Master dynamic URL parameters and route matching.' },
  ];

  return (
    <div className="blog-container">
      <h1>Blog Posts</h1>
      <div className="posts-list">
        {posts.map(post => (
          <article key={post.id} className="post-preview">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="read-more">
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;