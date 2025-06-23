// src/components/Navbar.jsx
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { token, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-2xl font-bold tracking-wide hover:text-yellow-300 transition duration-300">
              ExpenseManager
            </Link>
            <Link to="/" className="hover:text-yellow-300 transition duration-300">Home</Link>
            <Link to="/about" className="hover:text-yellow-300 transition duration-300">About</Link>
            <Link to="/contact" className="hover:text-yellow-300 transition duration-300">Contact</Link>
            <Link to="/stats" className="hover:text-yellow-300 transition duration-300">Statistics</Link>
          </div>

          <div className="flex items-center space-x-4">
            {token ? (
              <button
                onClick={logout}
                className="bg-red-500 px-3 py-1 rounded text-sm hover:bg-red-600 transition"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-green-500 px-3 py-1 rounded text-sm hover:bg-green-600 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-yellow-500 px-3 py-1 rounded text-sm hover:bg-yellow-600 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
