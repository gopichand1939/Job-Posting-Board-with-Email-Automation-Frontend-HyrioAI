import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Job Posting Board</h1>
      <p>Post and manage job postings with ease!</p>
      <Link to="/register">Register</Link> | <Link to="/login">Login</Link> |{" "}
      <Link to="/dashboard">Dashboard</Link> | <Link to="/create-job">Post a Job</Link> |{" "}
      <Link to="/logout">Logout</Link>
    </div>
  );
};

export default Home;
