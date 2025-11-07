export type JobStatus = "Applied" | "Interviewing" | "Offer Received" | "Rejected";

export interface Job {
  _id?: string;  // backend id
  id?: string;   // fallback local
  company: string;
  role: string;
  status: JobStatus;
  dateApplied?: string;
  notes?: string;
}
