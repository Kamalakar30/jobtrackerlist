import React from "react";
import { useDroppable } from "@dnd-kit/core";
import JobCard from "./JobCard";

export default function Column({ id, title, jobs, onEdit, onDelete }) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className={`p-4 rounded-lg shadow-sm min-h-[260px] transition ${isOver ? "ring-2 ring-brand-500/40 bg-white" : "bg-gray-50"}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold">{title}</h3>
        <span className="text-xs text-gray-500 bg-white px-2 py-0.5 rounded-full border">{jobs.length}</span>
      </div>

      <div className="space-y-3">
        {jobs.length === 0 ? (
          <div className="text-xs text-gray-400 italic">No items</div>
        ) : (
          jobs.map((job) => (
            <JobCard key={job.id} job={job} onEdit={() => onEdit(job)} onDelete={() => onDelete(job.id)} />
          ))
        )}
      </div>
    </div>
  );
}
