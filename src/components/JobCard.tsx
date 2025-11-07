import { Job } from "../types/job";
import { HiOutlineCalendar } from "react-icons/hi";
import { FiEdit, FiTrash2 } from "react-icons/fi";

interface Props {
  job: Job;
  onEdit: () => void;
  onDelete: () => void;
}

export default function JobCard({ job, onEdit, onDelete }: Props) {
  return (
    <div className="card">
      <h3>{job.company}</h3>
      <p>{job.role}</p>

      <p className="date">
        <HiOutlineCalendar />
        {new Date(job.dateApplied ?? "").toLocaleDateString()}
      </p>

      <div className="actions">
        <button onClick={onEdit}>
          <FiEdit /> Edit
        </button>

        <button onClick={onDelete}>
          <FiTrash2 /> Delete
        </button>
      </div>
    </div>
  );
}
