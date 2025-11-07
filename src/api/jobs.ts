import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL as string;

export const fetchJobs = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const createJob = async (job: any) => {
  const res = await axios.post(BASE_URL, job);
  return res.data;
};

export const updateJob = async (id: string, job: any) => {
  const res = await axios.put(`${BASE_URL}/${id}`, job);
  return res.data;
};

export const updateJobStatus = async (id: string, status: string) => {
  const res = await axios.put(`${BASE_URL}/${id}`, { status });
  return res.data;
};

export const deleteJob = async (id: string) => {
  await axios.delete(`${BASE_URL}/${id}`);
};
