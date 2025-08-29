// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

// Simple component for public pages
const Home = () => <div className="page"><h1>Home Page</h1><p>Welcome to our website!</p></div>;
const About = () => <div className="page"><h1>About Us</h1><p>Learn more about our company.</p></div>;
const Contact = () => <div className="page"><h1>Contact</h1><p>Get in touch with us.</p></div>;

function Navigation() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <Link to="/">React Router Advanced</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
        
        {isAuthenticated ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={logout} className="logout-btn">Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navigation />
          <main className="main-content">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/login" element={<Login />} />
              
              {/* Protected Routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              
              <Route path="/profile/*" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
              
              {/* 404 Route */}
              <Route path="*" element={
                <div className="not-found">
                  <h2>404 - Page Not Found</h2>
                  <p>The page you're looking for doesn't exist.</p>
                  <Link to="/">Go Home</Link>
                </div>
              } />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;