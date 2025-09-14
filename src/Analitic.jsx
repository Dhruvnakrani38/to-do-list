import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";
function Analitic() {
  const { tasks } = useContext(GlobalContext)
  const statusCounts = tasks.reduce((acc, task) => {
    if (acc[task.status] !== undefined) {
      acc[task.status] += 1;
    }
    return acc;
  }, {
    pending: 0,
    completed: 0,
    intermediate: 0,
    scheduled: 0
  });
  return (

    <>
     <div style={{ padding: '20px' }}>
      <h2>Task Status Summary</h2>

      <table style={{ width: '50%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr>
            <th style={thStyle}>Pending</th>
            <th style={thStyle}>Completed</th>
            <th style={thStyle}>Intermediate</th>
            <th style={thStyle}>Scheduled</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>{statusCounts.pending}</td>
            <td style={tdStyle}>{statusCounts.completed}</td>
            <td style={tdStyle}>{statusCounts.intermediate}</td>
            <td style={tdStyle}>{statusCounts.scheduled}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}
const thStyle = { border: '1px solid #ddd', padding: '10px' };
const tdStyle = { border: '1px solid #ddd', padding: '10px' };


export default Analitic