
import { useParams, Navigate, Link } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams();
  
  const posts = {
    1: { 
      title: 'Getting Started with React Router', 
      content: 'React Router is a powerful routing library for React applications. It allows you to handle navigation, manage browser history, and create single-page applications with multiple views.' 
    },
    2: { 
      title: 'Advanced Routing Techniques', 
      content: 'Advanced routing includes nested routes, protected routes, and dynamic routing. These techniques help create complex applications with proper navigation structure and security.' 
    },
    3: { 
      title: 'Dynamic Routing Patterns', 
      content: 'Dynamic routing uses URL parameters to handle variable content. This is essential for blogs, user profiles, and any content that needs unique URLs based on IDs or slugs.' 
    },
  };

  const post = posts[postId];

  if (!post) {
    return (
      <div className="not-found">
        <h2>Post not found</h2>
        <p>The blog post you're looking for doesn't exist.</p>
        <Link to="/blog">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="blog-post">
      <Link to="/blog" className="back-link">← Back to Blog</Link>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <div className="post-meta">
        <span>Post ID: {postId}</span>
        <span>Author: Demo User</span>
      </div>
    </div>
  );
};

export default BlogPost;