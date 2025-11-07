import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { HiOutlineCalendar } from "react-icons/hi";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function JobCard({ job, onEdit, onDelete }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id: job.id });
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
      className={`bg-white p-3 rounded-md shadow hover:shadow-md border ${isDragging ? "opacity-90" : "opacity-100"} cursor-grab`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="text-sm font-semibold">{job.company}</div>
          <div className="text-xs text-gray-600">{job.role}</div>
          {job.notes && <div className="mt-2 text-xs text-gray-700">{job.notes}</div>}
        </div>

        <div className="text-right flex-shrink-0 ml-2">
          <div className="text-xs text-gray-400 flex items-center gap-1">
            <HiOutlineCalendar /> <span>{new Date(job.appliedAt).toLocaleDateString()}</span>
          </div>
          <div className="flex gap-2 mt-3">
            <button onClick={onEdit} className="text-xs text-indigo-600 hover:underline flex items-center gap-1"><FiEdit /> Edit</button>
            <button onClick={onDelete} className="text-xs text-red-500 flex items-center gap-1"><FiTrash2 /> Del</button>
          </div>
        </div>
      </div>
    </div>
  );
}
