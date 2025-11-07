import axios from "axios";

const BASE_URL = "http://localhost:5000/api/jobs"; // your backend URL

export const fetchJobs = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const createJob = async (job: any) => {
  const response = await axios.post(BASE_URL, job);
  return response.data;
};

export const updateJob = async (id: string, job: any) => {
  const response = await axios.put(`${BASE_URL}/${id}`, job);
  return response.data;
};

export const deleteJob = async (id: string) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};

export const updateJobStatus = async (id: string, status: string) => {
  const response = await axios.patch(`${BASE_URL}/${id}`, { status });
  return response.data;
};
