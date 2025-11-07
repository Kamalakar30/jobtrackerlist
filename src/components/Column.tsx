import { Job } from "../types/job";
import JobCard from "./JobCard";

interface Props {
  id: string;
  title: string;
  jobs: Job[];
  onEdit: (job: Job) => void;
  onDelete: (id: string) => void;
  onAdd: () => void;
}

export default function Column({ id, title, jobs, onEdit, onDelete, onAdd }: Props) {
  return (
    <div className="column" id={id}>
      <h2>{title} ({jobs.length})</h2>

      {jobs.map((job) => (
        <JobCard key={String(job._id ?? job.id)} job={job} onEdit={onEdit} onDelete={onDelete} />
      ))}

      <button className="add-btn" onClick={onAdd}>+ Add</button>
    </div>
  );
}
