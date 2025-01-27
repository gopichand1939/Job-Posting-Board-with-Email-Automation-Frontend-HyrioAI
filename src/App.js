import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary"; // Import ErrorBoundary
import Home from "./pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import CreateJob from "./components/jobs/CreateJob";
import JobList from "./components/jobs/JobList";

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-job" element={<CreateJob />} />
          <Route path="/job-list" element={<JobList />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
