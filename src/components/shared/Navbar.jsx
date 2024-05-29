import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Auth/firebase.config';
import { signOut } from 'firebase/auth';

export default function Navbar() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-xl font-bold">Epic Eats</Link>
        </div>
        <div className="flex items-center">
          <Link to="/all-recipes" className="mr-4">All Recipes</Link>
          <Link to="/about-us" className="mr-4">About Us</Link>
          <Link to="/contact-us" className="mr-4">Contact Us</Link>
          {user ? (
            <div className="flex items-center">
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-8 h-8 rounded-full mr-2"
                />
              )}
              <span className="mr-4">{user.displayName}</span>
              {/* Link to DashboardLayout when Dashboard is clicked */}
              <Link to="/dashboard" className="mr-4">Dashboard</Link>
              <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="mr-4">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
