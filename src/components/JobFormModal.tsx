import React, { useState, useEffect } from "react";

const STATUSES = ["Applied", "Interviewing", "Offer Received", "Rejected"];

export default function JobModal({ initial, onClose, onCreate, onUpdate }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [appliedAt, setAppliedAt] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (initial) {
      setCompany(initial.company || "");
      setRole(initial.role || "");
      setStatus(initial.status || "Applied");
      setAppliedAt(initial.appliedAt ? new Date(initial.appliedAt).toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10));
      setNotes(initial.notes || "");
    } else {
      setCompany("");
      setRole("");
      setStatus("Applied");
      setAppliedAt(new Date().toISOString().slice(0, 10));
      setNotes("");
    }
  }, [initial]);

  function submit(e) {
    e.preventDefault();
    const payload = {
      company: company.trim(),
      role: role.trim(),
      status,
      appliedAt: new Date(appliedAt).toISOString(),
      notes: notes.trim(),
    };
    if (initial) {
      onUpdate(initial.id, payload);
    } else {
      onCreate(payload);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <form onSubmit={submit} className="bg-white rounded-lg w-full max-w-lg p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">{initial ? "Edit Job" : "Add Job"}</h2>
          <button type="button" onClick={onClose} className="text-sm text-gray-500 hover:text-gray-700">Close</button>
        </div>

        <div className="grid gap-3">
          <input className="input" placeholder="Company" required value={company} onChange={(e) => setCompany(e.target.value)} />
          <input className="input" placeholder="Role" required value={role} onChange={(e) => setRole(e.target.value)} />
          <div className="flex gap-3">
            <select className="input" value={status} onChange={(e) => setStatus(e.target.value)}>
              {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <input className="input" type="date" value={appliedAt} onChange={(e) => setAppliedAt(e.target.value)} />
          </div>
          <textarea className="input h-24" placeholder="Notes (optional)" value={notes} onChange={(e) => setNotes(e.target.value)} />

          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="btn btn-ghost">Cancel</button>
            <button type="submit" className="btn btn-primary">{initial ? "Save" : "Create"}</button>
          </div>
        </div>
      </form>
    </div>
  );
}
