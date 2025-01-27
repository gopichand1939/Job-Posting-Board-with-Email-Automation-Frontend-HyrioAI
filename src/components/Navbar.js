import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center text-white">
      <h1 className="text-lg font-bold">Job Board</h1>
      <div>
        <Link to="/" className="mr-4">
          Home
        </Link>
        {user ? (
          <>
            <Link to="/create-job" className="mr-4">
              Post Job
            </Link>
            <Link to="/job-list" className="mr-4">
              Job List
            </Link>
            <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-4">
              Login
            </Link>
            <Link to="/register" className="mr-4">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
