import React, { useEffect, useState } from "react";
import Column from "./Column";
import JobModal from "./JobModal";
import { DndContext } from "@dnd-kit/core";
import { ReactComponent as PlusIcon } from "../icons/plus.svg"; // optional; we'll use react-icons instead
import { FiPlus } from "react-icons/fi";

const DEFAULT_COLUMNS = ["Applied", "Interviewing", "Offer Received", "Rejected"];
const STORAGE_KEY = "job-tracker-v1";

function sampleJobs() {
  return [
    { id: "j1", company: "Acme Corp", role: "Frontend Dev", status: "Applied", appliedAt: new Date().toISOString(), notes: "Sent resume" },
    { id: "j2", company: "Beta LLC", role: "Backend Dev", status: "Interviewing", appliedAt: new Date().toISOString(), notes: "Phone screen done" },
    { id: "j3", company: "Gamma Inc", role: "Fullstack Intern", status: "Offer Received", appliedAt: new Date().toISOString(), notes: "Waiting for offer details" },
  ];
}

export default function KanbanBoard() {
  const [jobs, setJobs] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      setJobs(JSON.parse(raw));
    } else {
      const s = sampleJobs();
      setJobs(s);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
  }, [jobs]);

  function createJob(payload) {
    const newJob = {
      id: "j" + Math.random().toString(36).slice(2, 9),
      company: payload.company,
      role: payload.role,
      status: payload.status || "Applied",
      appliedAt: payload.appliedAt || new Date().toISOString(),
      notes: payload.notes || "",
    };
    setJobs((s) => [newJob, ...s]);
  }

  function updateJob(id, payload) {
    setJobs((s) => s.map((j) => (j.id === id ? { ...j, ...payload } : j)));
  }

  function deleteJob(id) {
    setJobs((s) => s.filter((j) => j.id !== id));
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over) return;
    const jobId = active.id;
    const destColumn = over.id;
    setJobs((s) => s.map((j) => (j.id === jobId ? { ...j, status: destColumn } : j)));
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-3">
          <div className="text-sm text-gray-600">Columns:</div>
          {DEFAULT_COLUMNS.map((c) => (
            <div key={c} className="text-xs px-2 py-1 bg-white border rounded-md text-gray-700">{c}</div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => { setEditing(null); setIsModalOpen(true); }}
            className="btn btn-primary flex items-center gap-2"
          >
            <FiPlus /> Add Job
          </button>
        </div>
      </div>

      <DndContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DEFAULT_COLUMNS.map((col) => (
            <Column
              key={col}
              id={col}
              title={col}
              jobs={jobs.filter((j) => j.status === col)}
              onEdit={(job) => { setEditing(job); setIsModalOpen(true); }}
              onDelete={deleteJob}
            />
          ))}
        </div>
      </DndContext>

      {isModalOpen && (
        <JobModal
          initial={editing}
          onClose={() => setIsModalOpen(false)}
          onCreate={(data) => { createJob(data); setIsModalOpen(false); }}
          onUpdate={(id, data) => { updateJob(id, data); setIsModalOpen(false); }}
        />
      )}
    </div>
  );
}
