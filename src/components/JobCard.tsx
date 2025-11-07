import { Job } from "../types/job";
import { HiOutlineCalendar } from "react-icons/hi";
import { FiEdit, FiTrash2 } from "react-icons/fi";

interface Props {
  job: Job;
  onEdit: (job: Job) => void;
  onDelete: (id: string) => void;
}

export default function JobCard({ job, onEdit, onDelete }: Props) {
  return (
    <div className="card">
      <h3>{job.company}</h3>
      <p>{job.role}</p>
      <p className="date"><HiOutlineCalendar /> {job.dateApplied}</p>
      <div className="actions">
        <button onClick={() => onEdit(job)}><FiEdit /> Edit</button>
        <button onClick={() => onDelete(String(job._id ?? job.id))}><FiTrash2 /> Delete</button>
      </div>
    </div>
  );
}
