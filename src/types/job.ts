export type JobStatus = "Applied" | "Interviewing" | "Offer Received" | "Rejected";

export interface Job {
  _id?: string;
  id?: string; // local fallback
  company: string;
  role: string;
  status: JobStatus;
  dateApplied: string;
  notes?: string;
}
