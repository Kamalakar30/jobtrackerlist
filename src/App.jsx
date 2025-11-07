// // import React, { useState } from "react";
// // import "./App.css";

// // const App = () => {
// //   const [jobs, setJobs] = useState({
// //     Applied: [
// //       { id: 1, company: "Google", role: "Frontend Developer", date: "2025-11-01" },
// //     ],
// //     Interviewing: [],
// //     "Offer Received": [],
// //     Rejected: [],
// //   });

// //   const statuses = ["Applied", "Interviewing", "Offer Received", "Rejected"];

// //   const handleAddJob = (status) => {
// //     const company = prompt("Enter Company Name:");
// //     const role = prompt("Enter Role:");
// //     const date = prompt("Enter Date Applied (YYYY-MM-DD):");

// //     if (company && role && date) {
// //       const newJob = { id: Date.now(), company, role, date };
// //       setJobs((prev) => ({
// //         ...prev,
// //         [status]: [...prev[status], newJob],
// //       }));
// //     }
// //   };

// //   const handleDelete = (status, id) => {
// //     setJobs((prev) => ({
// //       ...prev,
// //       [status]: prev[status].filter((job) => job.id !== id),
// //     }));
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 p-6">
// //       <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
// //         Job Tracker Board 🚀
// //       </h1>

// //       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
// //         {statuses.map((status) => (
// //           <div key={status} className="bg-white shadow-lg rounded-2xl p-4">
// //             <h2 className="text-xl font-semibold mb-4 text-center text-gray-700 border-b pb-2">
// //               {status}
// //             </h2>

// //             <div className="space-y-3">
// //               {jobs[status].map((job) => (
// //                 <div
// //                   key={job.id}
// //                   className="bg-blue-50 p-3 rounded-lg shadow flex flex-col"
// //                 >
// //                   <span className="font-semibold text-blue-800">
// //                     {job.company}
// //                   </span>
// //                   <span className="text-gray-700">{job.role}</span>
// //                   <span className="text-sm text-gray-500">{job.date}</span>
// //                   <button
// //                     onClick={() => handleDelete(status, job.id)}
// //                     className="text-red-500 text-sm mt-2 self-end hover:underline"
// //                   >
// //                     Delete
// //                   </button>
// //                 </div>
// //               ))}
// //             </div>

// //             <button
// //               onClick={() => handleAddJob(status)}
// //               className="w-full bg-blue-500 text-white mt-4 py-2 rounded-lg hover:bg-blue-600"
// //             >
// //               + Add Job
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;
// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [jobs, setJobs] = useState({
//     Applied: [
//       { id: 1, company: "Google", role: "Frontend Developer", date: "2025-11-01" },
//     ],
//     Interviewing: [],
//     "Offer Received": [],
//     Rejected: [],
//   });

//   const statuses = ["Applied", "Interviewing", "Offer Received", "Rejected"];

//   const handleAddJob = (status) => {
//     const company = prompt("Enter Company Name:");
//     const role = prompt("Enter Role:");
//     const date = prompt("Enter Date Applied (YYYY-MM-DD):");

//     if (company && role && date) {
//       const newJob = { id: Date.now(), company, role, date };
//       setJobs((prev) => ({
//         ...prev,
//         [status]: [...prev[status], newJob],
//       }));
//     }
//   };

//   const handleDelete = (status, id) => {
//     setJobs((prev) => ({
//       ...prev,
//       [status]: prev[status].filter((job) => job.id !== id),
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center p-6">
//       <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-10 tracking-wide">
//         Job Tracker Board 🚀
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-7xl">
//         {statuses.map((status) => (
//           <div
//             key={status}
//             className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-xl rounded-3xl p-5 flex flex-col transition-transform duration-200 hover:scale-105"
//           >
//             <h2 className="text-2xl font-semibold text-white text-center mb-4 border-b border-white/40 pb-2">
//               {status}
//             </h2>

//             <div className="space-y-3 flex-1 overflow-y-auto">
//               {jobs[status].map((job) => (
//                 <div
//                   key={job.id}
//                   className="bg-white/80 rounded-xl p-4 shadow-md transition-all hover:bg-white hover:shadow-lg"
//                 >
//                   <span className="font-bold text-gray-800">{job.company}</span>
//                   <div className="text-gray-700">{job.role}</div>
//                   <div className="text-sm text-gray-500">{job.date}</div>
//                   <button
//                     onClick={() => handleDelete(status, job.id)}
//                     className="text-red-500 text-sm mt-2 hover:underline"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               ))}
//             </div>

//             <button
//               onClick={() => handleAddJob(status)}
//               className="mt-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 shadow-md"
//             >
//               + Add Job
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// const API_URL = "http://localhost:5000/api/jobs";

// function App() {
//   const [jobs, setJobs] = useState({
//     Applied: [],
//     Interviewing: [],
//     "Offer Received": [],
//     Rejected: [],
//   });

//   // Load data from backend
//   useEffect(() => {
//     axios.get(API_URL).then((res) => {
//       const data = res.data;
//       setJobs({
//         Applied: data.filter((j) => j.status === "Applied"),
//         Interviewing: data.filter((j) => j.status === "Interviewing"),
//         "Offer Received": data.filter((j) => j.status === "Offer Received"),
//         Rejected: data.filter((j) => j.status === "Rejected"),
//       });
//     });
//   }, []);

//   // Add New Job
//   const handleAddJob = async (status) => {
//     const company = prompt("Company Name:");
//     const role = prompt("Role:");
//     const dateApplied = prompt("Date Applied (YYYY-MM-DD):");

//     if (!company || !role || !dateApplied) return;

//     const newJob = { company, role, status, dateApplied };
//     const res = await axios.post(API_URL, newJob);

//     setJobs((prev) => ({
//       ...prev,
//       [status]: [...prev[status], res.data],
//     }));
//   };

//   // Delete Job
//   const handleDelete = async (status, id) => {
//     await axios.delete(`${API_URL}/${id}`);
//     setJobs((prev) => ({
//       ...prev,
//       [status]: prev[status].filter((job) => job._id !== id),
//     }));
//   };

//   return (
//     <div className="app">
//       <h1>Job Tracker Board</h1>
//       <div className="board">
//         {Object.keys(jobs).map((status) => (
//           <div className="column" key={status}>
//             <h2>{status}</h2>

//             {jobs[status].map((job) => (
//               <div className="card" key={job._id}>
//                 <h3>{job.company}</h3>
//                 <p>{job.role}</p>
//                 <p>{job.dateApplied}</p>
//                 <button onClick={() => handleDelete(status, job._id)}>Delete</button>
//               </div>
//             ))}

//             <button className="add-btn" onClick={() => handleAddJob(status)}>
//               + Add Job
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// import {
//   DndContext,
//   closestCorners,
// } from "@dnd-kit/core";
// import {
//   arrayMove,
//   SortableContext,
//   useSortable,
//   verticalListSortingStrategy,
// } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";

// const API_URL = "http://localhost:5000/api/jobs";

// function SortableItem({ job, onDelete }) {
//   const { attributes, listeners, setNodeRef, transform, transition } =
//     useSortable({ id: job._id });

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//   };

//   return (
//     <div ref={setNodeRef} style={style} className="card" {...attributes} {...listeners}>
//       <h3>{job.company}</h3>
//       <p>{job.role}</p>
//       <p>{job.dateApplied}</p>
//       <button onClick={() => onDelete(job._id, job.status)}>Delete</button>
//     </div>
//   );
// }

// function App() {
//   const [jobs, setJobs] = useState({
//     Applied: [],
//     Interviewing: [],
//     "Offer Received": [],
//     Rejected: [],
//   });

//   // Load from DB
//   useEffect(() => {
//     axios.get(API_URL).then((res) => {
//       const data = res.data;
//       setJobs({
//         Applied: data.filter((j) => j.status === "Applied"),
//         Interviewing: data.filter((j) => j.status === "Interviewing"),
//         "Offer Received": data.filter((j) => j.status === "Offer Received"),
//         Rejected: data.filter((j) => j.status === "Rejected"),
//       });
//     });
//   }, []);

//   // Add job
//   const handleAddJob = async (status) => {
//     const company = prompt("Company Name:");
//     const role = prompt("Role:");
//     const dateApplied = prompt("Date (YYYY-MM-DD):");

//     if (!company || !role || !dateApplied) return;

//     const newJob = { company, role, status, dateApplied };
//     const res = await axios.post(API_URL, newJob);

//     setJobs((prev) => ({
//       ...prev,
//       [status]: [...prev[status], res.data],
//     }));
//   };

//   // Delete job
//   const handleDelete = async (id, status) => {
//     await axios.delete(`${API_URL}/${id}`);
//     setJobs((prev) => ({
//       ...prev,
//       [status]: prev[status].filter((j) => j._id !== id),
//     }));
//   };

//   // Handle Drag
//   const handleDragEnd = async (event) => {
//     const { active, over } = event;
//     if (!over) return;

//     const fromColumn = Object.keys(jobs).find((col) =>
//       jobs[col].some((item) => item._id === active.id)
//     );
//     const toColumn = over.id;

//     if (fromColumn !== toColumn) {
//       const movedJob = jobs[fromColumn].find((j) => j._id === active.id);
//       movedJob.status = toColumn;

//       await axios.put(`${API_URL}/${movedJob._id}`, movedJob);

//       setJobs((prev) => ({
//         ...prev,
//         [fromColumn]: prev[fromColumn].filter((j) => j._id !== active.id),
//         [toColumn]: [...prev[toColumn], movedJob],
//       }));
//     }
//   };

//   return (
//     <div className="app">
//       <h1>Job Tracker</h1>

//       <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
//         <div className="board">
//           {Object.keys(jobs).map((status) => (
//             <div key={status} className="column">
//               <h2>{status}</h2>

//               <SortableContext
//                 id={status}
//                 items={jobs[status]}
//                 strategy={verticalListSortingStrategy}
//               >
//                 {jobs[status].map((job) => (
//                   <SortableItem key={job._id} job={job} onDelete={handleDelete} />
//                 ))}
//               </SortableContext>

//               <button className="add-btn" onClick={() => handleAddJob(status)}>
//                 + Add Job
//               </button>
//             </div>
//           ))}
//         </div>
//       </DndContext>
//     </div>
//   );
// }

// export default App;
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const API_URL = "https://aryatechbackend.onrender.com/api/jobs";

function SortableItem({ job, onDelete }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: job._id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`card ${transform ? "dragging" : ""}`}
      {...attributes}
      {...listeners}
    >
      <h3>{job.company}</h3>
      <p>{job.role}</p>
      <p className="date">{job.dateApplied}</p>
      <button onClick={() => onDelete(job._id, job.status)}>Delete</button>
    </div>
  );
}

export default function App() {
  const [jobs, setJobs] = useState({
    Applied: [],
    Interviewing: [],
    "Offer Received": [],
    Rejected: [],
  });

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      const data = res.data;
      setJobs({
        Applied: data.filter((j) => j.status === "Applied"),
        Interviewing: data.filter((j) => j.status === "Interviewing"),
        "Offer Received": data.filter((j) => j.status === "Offer Received"),
        Rejected: data.filter((j) => j.status === "Rejected"),
      });
    });
  }, []);

  const handleAddJob = async (status) => {
    const company = prompt("Company Name:");
    const role = prompt("Role:");
    const dateApplied = prompt("Date (YYYY-MM-DD):");

    if (!company || !role || !dateApplied) return;

    const newJob = { company, role, status, dateApplied };
    const res = await axios.post(API_URL, newJob);

    setJobs((prev) => ({
      ...prev,
      [status]: [...prev[status], res.data],
    }));
  };

  const handleDelete = async (id, status) => {
    await axios.delete(`${API_URL}/${id}`);
    setJobs((prev) => ({
      ...prev,
      [status]: prev[status].filter((j) => j._id !== id),
    }));
  };

  const handleDragEnd = async ({ active, over }) => {
    if (!over) return;

    const from = Object.keys(jobs).find((col) =>
      jobs[col].some((j) => j._id === active.id)
    );
    const to = over.id;

    if (from === to) return;

    const job = jobs[from].find((j) => j._id === active.id);
    job.status = to;

    await axios.put(`${API_URL}/${job._id}`, job);

    setJobs((prev) => ({
      ...prev,
      [from]: prev[from].filter((j) => j._id !== active.id),
      [to]: [...prev[to], job],
    }));
  };

  return (
    <div className="app">
      <header className="header">
  <h1>Kanban Job Tracker</h1>
</header>

      

      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <div className="board">
          {Object.keys(jobs).map((status) => (
            <div id={status} key={status} className="column">
              <h2>{status}</h2>

              <SortableContext items={jobs[status]} strategy={verticalListSortingStrategy}>
                {jobs[status].map((job) => (
                  <SortableItem key={job._id} job={job} onDelete={handleDelete} />
                ))}
              </SortableContext>

              <button className="add-btn" onClick={() => handleAddJob(status)}>
                + Add Job
              </button>
            </div>
          ))}
        </div>
      </DndContext>
    </div>
  );
}



