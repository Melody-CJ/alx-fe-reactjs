
const ProfileSecurity = () => {
  return (
    <div className="profile-section">
      <h2>Security Settings</h2>
      <form className="security-form">
        <div>
          <label>Current Password:</label>
          <input type="password" />
        </div>
        <div>
          <label>New Password:</label>
          <input type="password" />
        </div>
        <div>
          <label>Confirm New Password:</label>
          <input type="password" />
        </div>
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default ProfileSecurity;