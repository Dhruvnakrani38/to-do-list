import {useState} from "react";
import App from "../App";
function AddTaskForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');
  const [status, setStatus] = useState('pending');

  const handleSubmit = (e) => {
    e.preventDefault();
if (title.trim() && description.trim() && time.trim()) {
      const task = { title, description, time, status };
      onSubmit(task);
      // Clear form after submit
      setTitle('');
      setDescription('');
      setTime('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
        <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: '8px', width: '300px', display: 'block', marginBottom: '10px' }}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: '8px', width: '300px', height: '80px', display: 'block', marginBottom: '10px' }}
      />

      <input
        type="datetime-local"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        style={{ padding: '8px', display: 'block', marginBottom: '10px' }}
      />

      <button type="submit" style={{ padding: '8px 12px' }}>
        Add Task
      </button>
    </form>
  );
}

export default AddTaskForm;
