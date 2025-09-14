import React from "react";
import { useState } from "react";
function TaskList({ tasks, removeTask ,updateTaskStatus }) {
  function formatDateTime(datetime) {
  const options = {  
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };

  return new Date(datetime).toLocaleString(undefined, options);
}

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Tasks:</h2>
      <h2>{}</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '20px'
        }}>
          <thead>
            <tr>
              <th style={thStyle}>Title</th>

              <th style={thStyle}>Description</th>

              <th style={thStyle}>Time</th>

              <th style={thStyle}>status</th>

              <th style={thStyle} >delete</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} style={trStyle}>
                <td style={tdStyle}>{task.title}</td>

                <td style={tdStyle}>{task.description}</td>

                <td style={tdStyle}>{formatDateTime(task.time)}</td>

                <td style={tdStyle} >
                   <select
                    value={task.status}
                    onChange={(e) => updateTaskStatus(index, e.target.value)}
                    style={{ padding: '6px', borderRadius: '4px' }}
                  >
                    <option value="pending">Pending</option>

                    <option value="completed">Completed</option>

                    <option value="intermediate">Intermediate</option>

                    <option value="scheduled">Scheduled</option>
                  </select>
                </td>

                <td style={tdStyle}>
                  <button style={removeButtonStyle}
                    onClick={() => removeTask(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

// Table Cell Styles
const thStyle = {
  border: '1px solid #ddd',
  padding: '12px',
  backgroundColor: '#007BFF',
  color: 'white',
  textAlign: 'left'
};

const tdStyle = {
  border: '1px solid #ddd',
  padding: '12px'
};

const trStyle = {
  backgroundColor: '#f9f9f9'
};
const removeButtonStyle = {
  backgroundColor: '#dc3545',
  color: 'white',
  border: 'none',
  padding: '6px 10px',
  borderRadius: '5px',
  cursor: 'pointer',
  textAlign: 'center'
};
export default TaskList;
