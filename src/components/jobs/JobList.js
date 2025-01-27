import React, { useEffect, useState } from 'react';
import { getJobs } from '../../api';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs()
      .then((response) => setJobs(response.data))
      .catch((error) => console.error('Error fetching jobs:', error));
  }, []);

  return (
    <div className="job-list">
      <h1>Job List</h1>
      {jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job._id}>
              <h3>{job.jobTitle}</h3>
              <p>{job.jobDescription}</p>
              <p>Experience Level: {job.experienceLevel}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobList;
