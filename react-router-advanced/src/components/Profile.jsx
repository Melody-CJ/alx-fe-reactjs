// src/components/Profile.jsx
import { Routes, Route, Link, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';
import ProfileSecurity from './ProfileSecurity';

const Profile = () => {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <p>Welcome, {user?.username}!</p>
      
      <nav className="profile-nav">
        <Link 
          to="details" 
          className={location.pathname.includes('/details') ? 'active' : ''}
        >
          Details
        </Link>
        <Link 
          to="settings" 
          className={location.pathname.includes('/settings') ? 'active' : ''}
        >
          Settings
        </Link>
        <Link 
          to="security" 
          className={location.pathname.includes('/security') ? 'active' : ''}
        >
          Security
        </Link>
      </nav>
      
      <div className="profile-content">
        <Outlet />
      </div>
    </div>
  );
};

// Profile Layout with nested routes
export const ProfileLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />}>
        <Route index element={<ProfileDetails />} />
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
        <Route path="security" element={<ProfileSecurity />} />
      </Route>
    </Routes>
  );
};

export default ProfileLayout;