import { useEffect, useState } from "react";
import { Job, JobStatus } from "../types/job";

interface Props {
  initial: Job | null;
  onClose: () => void;
  onCreate: (data: Partial<Job>) => void;
  onUpdate: (data: Partial<Job>) => void;
}

const STATUSES: JobStatus[] = ["Applied", "Interviewing", "Offer Received", "Rejected"];

export default function JobFormModal({ initial, onClose, onCreate, onUpdate }: Props) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState<JobStatus>("Applied");
  const [dateApplied, setDateApplied] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (initial) {
      setCompany(initial.company ?? "");
      setRole(initial.role ?? "");
      setStatus(initial.status ?? "Applied");
      setDateApplied(initial.dateApplied ?? "");
      setNotes(initial.notes ?? "");
    } else {
      setCompany("");
      setRole("");
      setStatus("Applied");
      setDateApplied(new Date().toISOString().slice(0, 10));
      setNotes("");
    }
  }, [initial]);

  const submit = () => {
    const payload: Partial<Job> = { company, role, status, dateApplied, notes };
    if (initial?._id || initial?.id) onUpdate(payload);
    else onCreate(payload);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-4 w-full max-w-md">
        <h3 className="text-lg font-semibold mb-3">
          {initial ? "Edit job" : "Add job"}
        </h3>

        <div className="space-y-3">
          <input
            className="w-full border rounded-lg p-2"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            className="w-full border rounded-lg p-2"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <select
            className="w-full border rounded-lg p-2"
            value={status}
            onChange={(e) => setStatus(e.target.value as JobStatus)}
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <input
            type="date"
            className="w-full border rounded-lg p-2"
            value={dateApplied?.slice(0, 10) || ""}
            onChange={(e) => setDateApplied(e.target.value)}
          />
          <textarea
            className="w-full border rounded-lg p-2"
            placeholder="Notes (optional)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button className="px-3 py-2 rounded-lg border" onClick={onClose}>
            Cancel
          </button>
          <button className="px-3 py-2 rounded-lg bg-indigo-600 text-white" onClick={submit}>
            {initial ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}
