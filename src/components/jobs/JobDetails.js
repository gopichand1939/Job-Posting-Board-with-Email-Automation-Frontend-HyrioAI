import React, { useState } from "react";
import { notifyCandidates } from "../../api";

const JobDetails = ({ job }) => {
  const [isNotifying, setIsNotifying] = useState(false);

  const handleNotify = async () => {
    setIsNotifying(true);
    try {
      await notifyCandidates(job._id);
      alert("Candidates notified successfully!");
    } catch (err) {
      alert("Failed to notify candidates.");
    } finally {
      setIsNotifying(false);
    }
  };

  return (
    <div>
      <h3>{job.jobTitle}</h3>
      <p>{job.jobDescription}</p>
      <p>Experience Level: {job.experienceLevel}</p>
      <p>End Date: {new Date(job.endDate).toLocaleDateString()}</p>
      <button onClick={handleNotify} disabled={isNotifying}>
        {isNotifying ? "Notifying..." : "Notify Candidates"}
      </button>
    </div>
  );
};

export default JobDetails;
