import React, { useEffect, useState } from "react";
import { getJobs, notifyCandidates } from "../api";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await getJobs();
        setJobs(data);
      } catch (err) {
        console.error("Error fetching jobs:", err.response?.data?.message);
      }
    };
    fetchJobs();
  }, []);

  const handleNotify = async (jobId) => {
    try {
      await notifyCandidates(jobId);
      alert("Notification sent successfully!");
    } catch (err) {
      console.error("Error notifying candidates:", err.response?.data?.message);
    }
  };

  return (
    <div>
      <h2>Job Dashboard</h2>
      {jobs.map((job) => (
        <div key={job._id} className="job-card">
          <h3>{job.jobTitle}</h3>
          <p>{job.jobDescription}</p>
          <p><strong>Experience:</strong> {job.experienceLevel}</p>
          <button onClick={() => handleNotify(job._id)}>Notify Candidates</button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
