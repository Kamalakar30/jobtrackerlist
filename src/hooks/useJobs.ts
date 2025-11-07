import { useState, useEffect } from "react";
import * as jobsApi from "../api/jobs";

export interface Job {
  _id: string;
  company: string;
  role: string;
  dateApplied: string;
  notes?: string;
  status: string;
}

export default function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    jobsApi.fetchJobs()
      .then((data: Job[]) => setJobs(data))
      .catch(() => setError("Failed to load jobs"))
      .finally(() => setLoading(false));
  }, []);

  const addJob = async (job: Omit<Job, "_id">) => {
    const created = await jobsApi.createJob(job);
    setJobs((prev) => [...prev, created]);
  };

  const editJob = async (id: string, updated: Job) => {
    const updatedJob = await jobsApi.updateJob(id, updated);
    setJobs((prev) => prev.map((j) => (j._id === id ? updatedJob : j)));
  };

  const removeJob = async (id: string) => {
    await jobsApi.deleteJob(id);
    setJobs((prev) => prev.filter((j) => j._id !== id));
  };

  const changeJobStatus = async (id: string, status: string) => {
    const updatedJob = await jobsApi.updateJobStatus(id, status);
    setJobs((prev) => prev.map((j) => (j._id === id ? updatedJob : j)));
  };

  return { jobs, loading, error, addJob, editJob, removeJob, changeJobStatus, setJobs };
}
