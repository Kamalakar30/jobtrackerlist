import { useEffect, useMemo, useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import Column from "./Column";
import JobFormModal from "./JobFormModal";
import { Job, JobStatus } from "../types/job";
import { fetchJobs, createJob, updateJob, updateJobStatus, deleteJob } from "../api/jobs";
import { FiPlus } from "react-icons/fi";

const COLUMNS: JobStatus[] = ["Applied", "Interviewing", "Offer Received", "Rejected"];

export default function Board() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [targetStatus, setTargetStatus] = useState<JobStatus>("Applied");

  useEffect(() => {
    (async () => {
      const data = await fetchJobs();
      setJobs(data);
    })();
  }, []);

  const grouped = useMemo(() => {
    const map: Record<JobStatus, Job[]> = {
      Applied: [],
      Interviewing: [],
      "Offer Received": [],
      Rejected: [],
    };
    jobs.forEach((j) => map[j.status]?.push(j));
    return map;
  }, [jobs]);

  const openCreate = (status: JobStatus) => {
    setSelectedJob(null);
    setTargetStatus(status);
    setModalOpen(true);
  };

  const openEdit = (job: Job) => {
    setSelectedJob(job);
    setTargetStatus(job.status);
    setModalOpen(true);
  };

  const handleCreate = async (data: Partial<Job>) => {
    const created = await createJob({ ...data, status: targetStatus });
    setJobs((prev) => [...prev, created]);
    setModalOpen(false);
  };

  const handleUpdate = async (id: string, data: Partial<Job>) => {
    const updated = await updateJob(id, data);
    setJobs((prev) => prev.map((j) => (String(j._id ?? j.id) === id ? updated : j)));
    setModalOpen(false);
  };

  const handleDelete = async (id: string) => {
    await deleteJob(id);
    setJobs((prev) => prev.filter((j) => String(j._id ?? j.id) !== id));
  };

  const onDragEnd = async ({ active, over }: any) => {
    if (!over) return;
    const id = String(active.id);
    const to = over.id as JobStatus;
    const job = jobs.find((j) => String(j._id ?? j.id) === id);
    if (!job || job.status === to) return;

    await updateJobStatus(id, to);
    setJobs((prev) => prev.map((j) => (String(j._id ?? j.id) === id ? { ...j, status: to } : j)));
  };

  return (
    <div className="p-6">
      <header className="header">
        <h1>Kanban Job Tracker</h1>
      </header>

      <div className="flex items-center justify-end mb-4">
        <button className="add-btn" onClick={() => openCreate("Applied")}>
          <FiPlus /> Add Job
        </button>
      </div>

      <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
        <div className="board">
          {COLUMNS.map((col) => (
            <div key={col} className="flex flex-col">
              <Column
                id={col}
                title={col}
                jobs={grouped[col]}
                onEdit={openEdit}
                onDelete={handleDelete}
              />
              <button className="add-btn mt-3" onClick={() => openCreate(col)}>
                + Add to {col}
              </button>
            </div>
          ))}
        </div>
      </DndContext>

      {modalOpen && (
        <JobFormModal
          initial={selectedJob}
          onClose={() => setModalOpen(false)}
          onCreate={handleCreate}
          onUpdate={(id, data) => handleUpdate(id, data)}
        />
      )}
    </div>
  );
}
