// src/components/ProfileDetails.jsx
import { useAuth } from '../context/AuthContext';

const ProfileDetails = () => {
  const { user } = useAuth();

  return (
    <div className="profile-section">
      <h2>Profile Details</h2>
      <div className="profile-info">
        <p><strong>Username:</strong> {user?.username}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Member since:</strong> January 2024</p>
      </div>
    </div>
  );
};

export default ProfileDetails;