
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Welcome to your protected dashboard, {user?.username}!</p>
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Messages</h3>
          <p>5 unread</p>
        </div>
        <div className="stat-card">
          <h3>Notifications</h3>
          <p>3 new</p>
        </div>
        <div className="stat-card">
          <h3>Tasks</h3>
          <p>8 pending</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;