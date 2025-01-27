import React, { useState } from "react";
import { createJob } from "../../api";

const CreateJob = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("BEGINNER");
  const [candidates, setCandidates] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState("");

  const handleCreateJob = async (e) => {
    e.preventDefault();
    try {
      const response = await createJob({
        jobTitle,
        jobDescription,
        experienceLevel,
        candidates: candidates.split(","),
        endDate,
      });
      alert("Job posted successfully!");
      console.log("Response:", response.data);
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Create a Job</h2>
      <form onSubmit={handleCreateJob}>
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          placeholder="Job Title"
          required
        />
        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Job Description"
          required
        />
        <select
          value={experienceLevel}
          onChange={(e) => setExperienceLevel(e.target.value)}
        >
          <option value="BEGINNER">Beginner</option>
          <option value="INTERMEDIATE">Intermediate</option>
          <option value="EXPERT">Expert</option>
        </select>
        <input
          type="text"
          value={candidates}
          onChange={(e) => setCandidates(e.target.value)}
          placeholder="Comma-separated candidate emails"
          required
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
        <button type="submit">Create Job</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default CreateJob;
