import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { HiOutlineCalendar } from "react-icons/hi";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Job } from "../types/job";

interface JobCardProps {
  job: Job;
  onEdit: (job: Job) => void;
  onDelete: (id: string) => void;
}

export default function JobCard({ job, onEdit, onDelete }: JobCardProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id: job._id });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    zIndex: isDragging ? 40 : "auto",
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className={`bg-white p-3 rounded-md shadow hover:shadow-md border cursor-grab transition ${
        isDragging ? "opacity-75" : "opacity-100"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="font-semibold text-gray-800">{job.company}</div>
          <div className="text-sm text-gray-600">{job.role}</div>
        </div>

        <div className="text-right flex-shrink-0 ml-2">
          <div className="text-xs text-gray-400 flex items-center gap-1">
            <HiOutlineCalendar /> <span>{new Date(job.dateApplied).toLocaleDateString()}</span>
          </div>

          <div className="flex gap-2 mt-3">
            <button
              onClick={() => onEdit(job)}
              className="text-xs text-indigo-600 hover:underline flex items-center gap-1"
            >
              <FiEdit /> Edit
            </button>
            <button
              onClick={() => onDelete(job._id)}
              className="text-xs text-red-500 hover:underline flex items-center gap-1"
            >
              <FiTrash2 /> Del
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
